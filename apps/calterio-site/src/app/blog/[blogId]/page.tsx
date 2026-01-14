import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Sidebar from "@/app/ui/Sidebar.jsx/index.jsx";
import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
// Using placeholder image - replace with actual image when available
const imgUrl = '/images/calterio-main-logo.png';

export async function generateStaticParams() {
  return [];
}

export default function BlogDetailsPage() {
  return (
    <>
    {/* Start Page Heading Section */}
      <PageHeading
        title='Blog Single'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText='blog-details'
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">

            {/* Start Details Post Content */}
            <Div className="cs-post cs-style1">
              <Div className="cs-post_thumb cs-radius_15">
                <Image src={imgUrl} alt="Post" className="w-100" width={800} height={500} />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1">
                  <span className="cs-posted_by">Admin</span>
                  <span className="cs-posted_date">25 Jan 2024</span>
                </Div>
                <h2 className="cs-post_title">Importance of storytelling and influencer marketing in social media marketing</h2>
              </Div>
              <Div className="cs-post_content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <h3>Heading Three</h3>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                </p>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Sed do eiusmod tempor incididunt ut labore et dolore</li>
                  <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                  <li>Duis aute irure dolor in reprehenderit in voluptate</li>
                </ul>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
              </Div>
              <Div className="cs-post_footer">
                <Div className="cs-post_tags">
                  <span>Tags:</span>
                  <Link href="/">Design</Link>
                  <Link href="/">Development</Link>
                  <Link href="/">Marketing</Link>
                </Div>
                <Div className="cs-post_social">
                  <span>Share:</span>
                  <Link href="/"><Icon icon="fa6-brands:facebook-f" /></Link>
                  <Link href="/"><Icon icon="fa6-brands:twitter" /></Link>
                  <Link href="/"><Icon icon="fa6-brands:linkedin-in" /></Link>
                  <Link href="/"><Icon icon="fa6-brands:pinterest-p" /></Link>
                </Div>
              </Div>
            </Div>
            {/* End Details Post Content */}

            {/* Start Author Box */}
            <Div className="cs-author_box cs-style1">
              <Image src={imgUrl} alt="Author" className="cs-author_thumb" width={100} height={100} />
              <Div className="cs-author_info">
                <h3 className="cs-author_name">Melon Bulgery</h3>
                <p className="cs-author_designation">Content Writer</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Div>
            </Div>
            {/* End Author Box */}

          </Div>
          <Div className="col-lg-4">
            <Sidebar />
          </Div>
        </Div>
      </Div>
      {/* End Blog Details */}

      <Spacing lg='150' md='80'/>
      <Cta 
        title='Let’s Disscuss Make Something <br />Cool Together' 
        btnText='Apply For Meeting' 
        btnLink='/contact' 
        bgSrc='/images/cta_bg.jpeg'
      />
    </>
  );
}

