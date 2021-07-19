import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
		<img src="/img/front-logo.svg" id="front-logo" width="410" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div id="frontHeroButtons" className={styles.buttons}>
		  <Link
            className="button button--front button--lg"
            to="https://github.com/pixelwatt/method/releases">
            Download Method
          </Link>
		  <Link
            className="button button--front button--lg"
            to="https://github.com/pixelwatt/method-generator/releases">
            Download Generator
          </Link>
          <Link
            className="button button--front button--lg"
            to="/docs/intro">
            Theme Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
