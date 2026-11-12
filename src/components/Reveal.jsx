import useInView from '../hooks/useInView.js';

// Wrap content in its own element so the reveal transform never fights a hover transform inside.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      {...rest}
      ref={ref}
      data-visible={inView || undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
