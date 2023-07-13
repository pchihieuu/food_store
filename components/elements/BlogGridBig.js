import React from "react";

import Link from "next/link";

const BlogGridBig = ({ show }) => {
    var data = [
        {
            id: 1,
            title: "The litigants on the screen are not actors",
            category: "Politic",
            views: 126,
            date: "25 April 2021",
            img: "blog-16.png",
            desc: "TAliquam hendrerit lorem mi nunc sit aliquam nec leo, ut integer nisi, iaculis dictumst at diam libero, elit pharetra morbi urna nunc, et at nisl, pellentesque massa nec. Aenean ullamcorper eu augue vitae tempor. Suspendisse potenti. Nulla facilisi. Sed venenatis mollis lacinia.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-17.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "TAliquam hendrerit lorem mi nunc sit aliquam nec leo, ut integer nisi, iaculis dictumst at diam libero, elit pharetra morbi urna nunc, et at nisl, pellentesque massa nec. Aenean ullamcorper eu augue vitae tempor. Suspendisse potenti. Nulla facilisi. Sed venenatis mollis lacinia.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-18.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "TAliquam hendrerit lorem mi nunc sit aliquam nec leo, ut integer nisi, iaculis dictumst at diam libero, elit pharetra morbi urna nunc, et at nisl, pellentesque massa nec. Aenean ullamcorper eu augue vitae tempor. Suspendisse potenti. Nulla facilisi. Sed venenatis mollis lacinia.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-4.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "TAliquam hendrerit lorem mi nunc sit aliquam nec leo, ut integer nisi, iaculis dictumst at diam libero, elit pharetra morbi urna nunc, et at nisl, pellentesque massa nec. Aenean ullamcorper eu augue vitae tempor. Suspendisse potenti. Nulla facilisi. Sed venenatis mollis lacinia.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-5.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "TAliquam hendrerit lorem mi nunc sit aliquam nec leo, ut integer nisi, iaculis dictumst at diam libero, elit pharetra morbi urna nunc, et at nisl, pellentesque massa nec. Aenean ullamcorper eu augue vitae tempor. Suspendisse potenti. Nulla facilisi. Sed venenatis mollis lacinia.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-6.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "TAliquam hendrerit lorem mi nunc sit aliquam nec leo, ut integer nisi, iaculis dictumst at diam libero, elit pharetra morbi urna nunc, et at nisl, pellentesque massa nec. Aenean ullamcorper eu augue vitae tempor. Suspendisse potenti. Nulla facilisi. Sed venenatis mollis lacinia.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-7.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "TAliquam hendrerit lorem mi nunc sit aliquam nec leo, ut integer nisi, iaculis dictumst at diam libero, elit pharetra morbi urna nunc, et at nisl, pellentesque massa nec. Aenean ullamcorper eu augue vitae tempor. Suspendisse potenti. Nulla facilisi. Sed venenatis mollis lacinia.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-8.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "TAliquam hendrerit lorem mi nunc sit aliquam nec leo, ut integer nisi, iaculis dictumst at diam libero, elit pharetra morbi urna nunc, et at nisl, pellentesque massa nec. Aenean ullamcorper eu augue vitae tempor. Suspendisse potenti. Nulla facilisi. Sed venenatis mollis lacinia.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-9.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "TAliquam hendrerit lorem mi nunc sit aliquam nec leo, ut integer nisi, iaculis dictumst at diam libero, elit pharetra morbi urna nunc, et at nisl, pellentesque massa nec. Aenean ullamcorper eu augue vitae tempor. Suspendisse potenti. Nulla facilisi. Sed venenatis mollis lacinia.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-10.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "TAliquam hendrerit lorem mi nunc sit aliquam nec leo, ut integer nisi, iaculis dictumst at diam libero, elit pharetra morbi urna nunc, et at nisl, pellentesque massa nec. Aenean ullamcorper eu augue vitae tempor. Suspendisse potenti. Nulla facilisi. Sed venenatis mollis lacinia.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-11.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "TAliquam hendrerit lorem mi nunc sit aliquam nec leo, ut integer nisi, iaculis dictumst at diam libero, elit pharetra morbi urna nunc, et at nisl, pellentesque massa nec. Aenean ullamcorper eu augue vitae tempor. Suspendisse potenti. Nulla facilisi. Sed venenatis mollis lacinia.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-12.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "TAliquam hendrerit lorem mi nunc sit aliquam nec leo, ut integer nisi, iaculis dictumst at diam libero, elit pharetra morbi urna nunc, et at nisl, pellentesque massa nec. Aenean ullamcorper eu augue vitae tempor. Suspendisse potenti. Nulla facilisi. Sed venenatis mollis lacinia.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-13.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "TAliquam hendrerit lorem mi nunc sit aliquam nec leo, ut integer nisi, iaculis dictumst at diam libero, elit pharetra morbi urna nunc, et at nisl, pellentesque massa nec. Aenean ullamcorper eu augue vitae tempor. Suspendisse potenti. Nulla facilisi. Sed venenatis mollis lacinia.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-14.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "TAliquam hendrerit lorem mi nunc sit aliquam nec leo, ut integer nisi, iaculis dictumst at diam libero, elit pharetra morbi urna nunc, et at nisl, pellentesque massa nec. Aenean ullamcorper eu augue vitae tempor. Suspendisse potenti. Nulla facilisi. Sed venenatis mollis lacinia.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-15.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "TAliquam hendrerit lorem mi nunc sit aliquam nec leo, ut integer nisi, iaculis dictumst at diam libero, elit pharetra morbi urna nunc, et at nisl, pellentesque massa nec. Aenean ullamcorper eu augue vitae tempor. Suspendisse potenti. Nulla facilisi. Sed venenatis mollis lacinia.",
        },
    ];

    return (
        <>
                                        
            {data.slice(0, show).map((item, i) => (
                <article className="first-post mb-30 hover-up animated" key={i}>
                <div className="position-relative overflow-hidden">
                    <span className="top-left-icon"><i className="fi-rs-headphones"></i></span>
                    <div className="post-thumb border-radius-15">
                        <Link href="/blog-post-right"><a>
                            <img className="border-radius-15" src={`/assets/imgs/blog/${item.img}`} alt="" />
                        </a></Link>
                    </div>
                </div>
                <div className="entry-content">
                    <h2 className="post-title mb-20">
                        <Link href="/blog-post-right"><a>{item.title} </a></Link>
                    </h2>
                    <p className="post-exerpt font-medium text-muted mb-30">{item.desc}</p>
                    <div className="mb-20 entry-meta meta-2">
                        <div className="entry-meta meta-1 mb-30">
                            <div className="font-sm">
                                <span><span className="mr-10 text-muted"><i className="fi-rs-eye"></i></span>23k</span>
                                <span className="ml-30"
                                    ><span className="mr-10 text-muted"><i className="fi-rs-comment-alt"></i></span>17k</span>
                                <span className="ml-30"
                                    ><span className="mr-10 text-muted"><i className="fi-rs-share"></i></span>18k</span>
                            </div>
                        </div>
                        <Link href="/blog-post-right"><a className="btn btn-sm">Read more<i className="fi-rs-arrow-right ml-10"></i></a></Link>
                    </div>
                </div>
            </article>
            ))}
        </>
    );
};

export default BlogGridBig;
