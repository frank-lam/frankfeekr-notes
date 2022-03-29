import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '极致的阅读体验',
    Svg: require('@site/static/img/undraw/v2/undraw_reading_time.svg').default,
    description: (
      <>
        文档使用 Docusaurus 构建，极致阅读体验
      </>
    ),
  },
  {
    title: '高效的文档检索',
    Svg: require('@site/static/img/undraw/v2/undraw_taking_notes.svg').default,
    description: (
      <>
        支持中英文检索，文章目录导航，快速定位知识
      </>
    ),
  },
  {
    title: '全面的知识体系',
    Svg: require('@site/static/img/undraw/v2/undraw_hello.svg').default,
    description: (
      <>
        大前端、后台技术、大数据等主流技术栈
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
