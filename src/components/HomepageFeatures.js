import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Built For Speed',
    Svg: require('../../static/img/front-icon-speed.svg').default,
    description: (
      <>
        Method is built to minimize database queries and reuse queried data across layout components.
      </>
    ),
  },
  {
    title: 'Stay DRY',
    Svg: require('../../static/img/front-icon-dry.svg').default,
    description: (
      <>
        Leveraging the power of CMB2 and a custom layout class, Method allows you to quickly build reusable layout components.
      </>
    ),
  },
  {
    title: 'Bootstrap 5 Included',
    Svg: require('../../static/img/front-icon-bootstrap.svg').default,
    description: (
      <>
        Method includes Bootstrap 5, importing the source SASS files directly into the theme stylesheet, so you can quickly build a responsive frontend.
      </>
    ),
  },
  {
    title: 'Automated Dev Tasks',
    Svg: require('../../static/img/front-icon-automate.svg').default,
    description: (
      <>
        Method includes several Gulp tasks for automating common development tasks, as well as Browsersync integration.
      </>
    ),
  },
  {
    title: 'Create Custom Builds',
    Svg: require('../../static/img/front-icon-custom.svg').default,
    description: (
      <>
        Using Method Generator, you can quickly create custom builds of Method specifically optimized to fit your project.
      </>
    ),
  },
  {
    title: 'Frontend Flexibility',
    Svg: require('../../static/img/front-icon-flexible.svg').default,
    description: (
      <>
        Method provides a blank slate for building the frontend. The goal of Method is to speed up dev, not get in your way.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
