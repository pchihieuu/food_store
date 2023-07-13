
import Link from "next/link";

const BlogGrid = ({ show, wide }) => {
    var data = [
        {
            id: 1,
            title: "The litigants on the screen are not actors",
            category: "Politic",
            views: 126,
            date: "25 April 2021",
            img: "blog-1.png",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-2.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-3.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-4.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-5.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-6.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-7.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-8.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-9.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-10.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-11.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-12.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-13.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-14.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-15.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
    ];

    return (
        <>
            {data.slice(0, show).map((item, i) => (
                <article
                    className={
                        wide
                            ? "col-xl-3 col-lg-4 col-md-6 text-center hover-up mb-30 animated"
                            : "col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated"
                    }
                    key={i}
                >
                    <div className="post-thumb">
                        <Link href="/blog-post-right">
                            <a>
                                <img
                                    className="border-radius-15"
                                    src={`/assets/imgs/blog/${item.img}`}
                                    alt=""
                                />
                            </a>
                        </Link>
                        <div className="entry-meta">
                            <Link href="/blog-category-grid">
                                <a className="entry-meta meta-2">
                                    <i className="fi-rs-heart"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="entry-content-2">
                        <h6 className="mb-10 font-sm">
                            <Link href="/blog-category-grid">
                                <a className="entry-meta text-muted">
                                    {item.category}
                                </a>
                            </Link>
                        </h6>
                        <h4 className="post-title mb-15">
                            <Link href="/blog-post-right">
                                <a>{item.title}</a>
                            </Link>
                        </h4>
                        <div className="entry-meta font-xs color-grey mt-10 pb-10">
                            <div>
                                <span className="post-on mr-10">{item.date}</span>
                                <span className="hit-count has-dot mr-10">
                                    {item.views}k Views
                                </span>
                                <span className="hit-count has-dot">
                                    4 mins read
                                </span>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
};

export default BlogGrid;
