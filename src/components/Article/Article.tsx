import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import classes from "./Article.module.css";

type Props = HTMLAttributes<HTMLElement> & {
  title: string;
  articleId: number;
  tag: string;
  image: string;
};

const Article: FC<Props> = ({ className, image, title, tag, articleId }) => {
  return (
    <Link to={`/article/${articleId}`}>
      <article className={clsx(classes.card, className)}>
        <img className={classes.background} src={image} alt={title} />
        <div className={classes.overlay} />
        <div className={classes.info}>
          <div className={classes.tag}>{tag}</div>
          <div className={classes.title}>{title}</div>
        </div>
      </article>
    </Link>
  );
};

export default Article;
