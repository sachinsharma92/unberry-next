/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const Mixpanel = dynamic(() => import("../../services/mixpanel"));
const LayoutPrimary = dynamic(() => import("../../common/layoutPrimary"));
const SubscribeCard = dynamic(() => import("../../common/subscribe"));
const UpNextCard = dynamic(() => import("../../components/blogs/upNextCard"));

// Styles here
import styles from "./styles.module.scss";

const BlogDetail = ({ heading, bannerImage }) => {
  const [headerColor, setHeaderColor] = useState("white");
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  const params = { slug };

  const [data, setData] = useState({});

  // Menu Color change after scroll 360
  const listenScrollEvent = () => {
    window.scrollY > 360 ? setHeaderColor("menu-white") : setHeaderColor("");
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    document.body.className = "blog-detaul-mode";
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    if (slug) {
      axios
        .get(`https://cms-api.unberry.com/api/v1/article/`, { params })
        .then((res) => {
          setData(res?.data?.data[0] ?? {});
          Mixpanel.track(`Blog Opened: ${res?.data?.data[0]?.heading}`);
          window.dataLayer.push({
            event: "blogOpened",
            category: "blog",
            label: res?.data?.data[0]?.heading,
          });
          document.title = `Unberry | ${res?.data?.data[0]?.heading || "Blog"}`;
        })
        .catch((e) => {
          console.log("blog detail err", e);
        });
    }
  }, [slug]);

  return (
    <>
      <Head>
        <title>{heading}</title>
        <meta property="og:image" content={bannerImage} />
        <meta name="twitter:image" content={bannerImage} />
      </Head>

      <LayoutPrimary
        className={`${styles.blogDetailSection} blog-detail-style ${headerColor}`}
        backHander={() => router.back()}
      >
        <div className={styles.blogLayout}>
          <div className={styles.blogHeader}>
            <h2 className={styles.title2}>{data?.heading}</h2>
          </div>
        </div>
        <div className={styles.heroBannerImg}>
          <img
            className="img-blog"
            src={data?.bannerImage}
            alt={data?.heading}
          />
        </div>

        <div className="content-blog-layout">
          <ReactMarkdown
            className="markdown-style"
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {data?.articleContent}
          </ReactMarkdown>

          <div className="sidebar">
            <SubscribeCard socialShow />
          </div>
        </div>

        <UpNextCard currentData={data} />
      </LayoutPrimary>
    </>
  );
};

export default BlogDetail;

// BlogDetail.getInitialProps = async (ctx) => {
// 	const { asPath } = ctx;
// 	let pathArr = asPath?.split("/");
// 	let id = pathArr[pathArr?.length - 1];
// 	let params = { slug: id };
// 	const res = await axios.get(`https://cms-api.unberry.com/api/v1/article/`, {
// 		params,
// 	});
// 	return { heading: res?.data?.data[0]?.heading, bannerImage: res?.data?.data[0]?.bannerImage };
// };
