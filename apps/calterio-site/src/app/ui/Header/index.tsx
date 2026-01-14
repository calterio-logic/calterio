'use client';
import { useEffect, useState } from 'react';
import Div from '../Div';
import Link from 'next/link';
import DropDown from './DropDown';

interface HeaderProps {
  variant?: string;
}

export default function Header({ variant }: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <img src="/images/calterio-main-logo.png" alt="Calterio Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li>
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link
                        href="/architecture"
                        onClick={() => setMobileToggle(false)}
                      >
                        Architecture
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/architecture"
                              onClick={() => setMobileToggle(false)}
                            >
                              System Architecture
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/architecture#deployment"
                              onClick={() => setMobileToggle(false)}
                            >
                              Deployment Topology
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/architecture#data-flow"
                              onClick={() => setMobileToggle(false)}
                            >
                              Data Flow
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/architecture#integrations"
                              onClick={() => setMobileToggle(false)}
                            >
                              Integration Points
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <Link
                        href="/logic-editor"
                        onClick={() => setMobileToggle(false)}
                      >
                        Logic Editor
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dataflow-modeler"
                        onClick={() => setMobileToggle(false)}
                      >
                        Dataflow Modeler
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/edge-runtime"
                        onClick={() => setMobileToggle(false)}
                      >
                        Edge Runtime
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link
                        href="/use-cases"
                        onClick={() => setMobileToggle(false)}
                      >
                        Use Cases
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/use-cases"
                              onClick={() => setMobileToggle(false)}
                            >
                              All Use Cases
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/use-cases/predictive-maintenance-pharmaceutical"
                              onClick={() => setMobileToggle(false)}
                            >
                              Predictive Maintenance
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/use-cases/quality-control-pharmaceutical"
                              onClick={() => setMobileToggle(false)}
                            >
                              Quality Control
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/use-cases/energy-optimization-textile"
                              onClick={() => setMobileToggle(false)}
                            >
                              Energy Optimization
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        onClick={() => setMobileToggle(false)}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <Link
                    href="/contact"
                    className="cs-text_btn"
                    style={{ color: '#F28B24' }}
                  >
                    <span>Request Demo</span>
                  </Link>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>
    </>
  );
}

