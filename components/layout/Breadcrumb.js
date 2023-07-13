
import Link from "next/link";

const Breadcrumb = ({parent, sub, subChild, noBreadcrumb}) => {
    return (
        <>
            <div className={`page-header breadcrumb-wrap ${noBreadcrumb}`}>
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/"><a>
                            {parent}
                        </a>
                        </Link>
                        <span></span> {sub}
                        <span></span> {subChild}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;
