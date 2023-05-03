import React, { ReactNode } from 'react';

type HeadingProps = {
  className?: String;
  children?: ReactNode;
  HeadingType: any;
  ariaLabel?: String;
};

const Heading: React.FC<HeadingProps> = ({
  children,
  className,
  HeadingType,
  ariaLabel,
}) => (
  <HeadingType className={className} aria-label={ariaLabel}>
    {children}
  </HeadingType>
);

export default Heading;
