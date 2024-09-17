export const VNFlag: React.FC<React.SVGAttributes<{}>> = ({ ...rest }) => {
  return (
    <svg className='h-full' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' version='1.1'>
      <rect width='50' height='20' fill='#da251d'  />
      <polygon points='15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85' fill='#ff0' transform="scale(.9375)  translate(-4.4, -0.8)" />
    </svg>
  );
};
