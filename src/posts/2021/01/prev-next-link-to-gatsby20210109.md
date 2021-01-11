---
title: "Gatsby製ブログ記事で前後の記事を表示させる"
date: "2021-01-09"
tags: ["Gatsby"]
---

Gatsby製のブログで記事の最後に前後記事へのリンクを追加したので、方法を紹介します。

### まずはgatsby-node.jsでデータを得る

　GraphQLで前後の記事のデータを取得します。それぞれnext,prevで指定できます。このブログではマークダウンのファイル名をslugとして利用しているので、slugとtitleを指定。

 
```javascript:title=prismjs.js
  const res = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          prev: previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
	  //...省略
	  }
```
> ここでpostRemarkとなっているのは同じクエリ内にタグを指定する別のallMarkdownRemarkがあるからです。

- gatsby-node.js
ブログテンプレートに前後記事のデータをpropsとして渡します。
```JavaScript
 res.data.postsRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
        next: edge.next,
        prev: edge.prev,
      },
    })
  })
```

### ブログテンプレートの編集
next,prevは props.pageContext経由で取得できます。
- blog.js
```JavaScript
	//...省略
      <div>
        {props.pageContext.prev && (
          <Link to={`/blog/${props.pageContext.prev.fields.slug}`}>
            {props.pageContext.prev.frontmatter.title}
          </Link>
        )}
        <br />
        {props.pageContext.next && (
          <Link to={`/blog/${props.pageContext.next.fields.slug}`}>
            {props.pageContext.next.frontmatter.title}
          </Link>
        )}
      </div>
```

以上になります。
starterによっては、初めから導入されている機能かもしれませんが、ブログには欠かせないものだと思います。

参考になれば幸いです。それでは。
