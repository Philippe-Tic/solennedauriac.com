export const Divider = ({ number = 1 }: { number: number }) => {
  const DividerUnit = ({index}: {index: number}) => (
  <svg
    id={`divider-${index}`}
    width="100%"
    viewBox="0 0 98 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
      style={{
      marginLeft: "-2px",
    }}
  >
    <mask
      id={`mask0_103_1000-${index}`}
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={98}
      height={9}
    >
      <path
        d="M90.4 3.8C88.9 5.4 87.8 6.7 85.4 6.7C83 6.7 81.8 5.4 80.4 3.8C78.8 2.1 76.9 0 73.2 0C69.5 0 67.5 2.1 66 3.8C64.5 5.4 63.4 6.7 61 6.7C58.6 6.7 57.4 5.4 56 3.8C54.4 2.1 52.5 0 48.8 0C45.1 0 43.1 2.1 41.6 3.8C40.1 5.4 39 6.7 36.6 6.7C34.2 6.7 33 5.4 31.6 3.8C30 2.1 28.1 0 24.4 0C20.7 0 18.7 2.1 17.2 3.8C15.7 5.4 14.6 6.7 12.2 6.7C9.8 6.7 8.6 5.4 7.2 3.8C5.6 2.1 3.7 0 0 0V2C2.4 2 3.6 3.3 5 4.9C6.6 6.6 8.5 8.7 12.2 8.7C15.9 8.7 17.9 6.6 19.4 4.9C20.9 3.3 22 2 24.4 2C26.8 2 28 3.3 29.4 4.9C31 6.6 32.9 8.7 36.6 8.7C40.3 8.7 42.3 6.6 43.8 4.9C45.3 3.3 46.4 2 48.8 2C51.2 2 52.4 3.3 53.8 4.9C55.4 6.6 57.3 8.7 61 8.7C64.7 8.7 66.7 6.6 68.2 4.9C69.7 3.3 70.8 2 73.2 2C75.6 2 76.8 3.3 78.2 4.9C79.8 6.6 81.7 8.7 85.4 8.7C89.1 8.7 91.1 6.6 92.6 4.9C94.1 3.3 95.2 2 97.6 2V0C93.9 0 92 2.1 90.4 3.8Z"
        fill="black"
        strokeDasharray="0,0,0,234.98985290527344"
      >
        <animate
          attributeType="XML"
          attributeName="stroke-dasharray"
          repeatCount={1}
          dur="2.1841338393734104s"
          values="0,0,0,234.98985290527344;            0,131.7950040340823,103.19484887119116,0;            234.98985290527344,0,0,0"
          keyTimes="0; 0.5608540215870941; 1"
          begin="0.3011952953013306s"
          fill="freeze"
        />
      </path>
    </mask>
    <g mask={`url(#mask0_103_1000-${index})`}>
      <line
        y1={4.5}
        x2={98}
        y2={4.5}
        stroke="#FF830F"
        strokeWidth={9}
        strokeDasharray="0,0,0,98"
      >
        <animate
          attributeType="XML"
          attributeName="stroke-dasharray"
          repeatCount={1}
          dur="2.056157022022277s"
          values="0,0,0,98;            0,54.373980325927256,43.62601967407275,0;            98,0,0,0"
          keyTimes="0; 0.5548365339380332; 1"
          begin="0.29632438362237756s"
          fill="freeze"
        />
      </line>
    </g>
    <mask
      id={`mask1_103_1000-${index}`}
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={8}
      width={98}
      height={10}
    >
      <path
        d="M90.4 12.5C88.9 14.1 87.8 15.4 85.4 15.4C83 15.4 81.8 14.1 80.4 12.5C78.8 10.8 76.9 8.69995 73.2 8.69995C69.5 8.69995 67.5 10.8 66 12.5C64.5 14.1 63.4 15.4 61 15.4C58.6 15.4 57.4 14.1 56 12.5C54.4 10.8 52.5 8.69995 48.8 8.69995C45.1 8.69995 43.1 10.8 41.6 12.5C40.1 14.1 39 15.4 36.6 15.4C34.2 15.4 33 14.1 31.6 12.5C30 10.8 28.1 8.69995 24.4 8.69995C20.7 8.69995 18.7 10.8 17.2 12.5C15.7 14.1 14.6 15.4 12.2 15.4C9.8 15.4 8.6 14.1 7.2 12.5C5.6 10.8 3.7 8.69995 0 8.69995V10.7C2.4 10.7 3.6 12 5 13.6C6.6 15.3 8.5 17.4 12.2 17.4C15.9 17.4 17.9 15.3 19.4 13.6C20.9 12 22 10.7 24.4 10.7C26.8 10.7 28 12 29.4 13.6C31 15.3 32.9 17.4 36.6 17.4C40.3 17.4 42.3 15.3 43.8 13.6C45.3 12 46.4 10.7 48.8 10.7C51.2 10.7 52.4 12 53.8 13.6C55.4 15.3 57.3 17.4 61 17.4C64.7 17.4 66.7 15.3 68.2 13.6C69.7 12 70.8 10.7 73.2 10.7C75.6 10.7 76.8 12 78.2 13.6C79.8 15.3 81.7 17.4 85.4 17.4C89.1 17.4 91.1 15.3 92.6 13.6C94.1 12 95.2 10.7 97.6 10.7V8.69995C93.9 8.69995 92 10.8 90.4 12.5Z"
        fill="black"
        strokeDasharray="0,0,0,234.9901580810547"
      >
        <animate
          attributeType="XML"
          attributeName="stroke-dasharray"
          repeatCount={1}
          dur="2.124028276398119s"
          values="0,0,0,234.9901580810547;            0,132.53323447391358,102.45692360714108,0;            234.9901580810547,0,0,0"
          keyTimes="0; 0.5639948309162768; 1"
          begin="0.06324591425616925s"
          fill="freeze"
        />
      </path>
    </mask>
    <g mask={`url(#mask1_103_1000-${index})`}>
      <line
        y1={13.2}
        x2={98}
        y2={13.2}
        stroke="#FF830F"
        strokeWidth={9}
        strokeDasharray="0,0,0,98"
      >
        <animate
          attributeType="XML"
          attributeName="stroke-dasharray"
          repeatCount={1}
          dur="2.417373893537078s"
          values="0,0,0,98;            0,56.69921237387501,41.300787626125,0;            98,0,0,0"
          keyTimes="0; 0.5785633915701531; 1"
          begin="0.4177993281658436s"
          fill="freeze"
        />
      </line>
    </g>
  </svg>
  );

  return (
    <>
      <div className="w-full md:flex hidden">
        { Array.from({ length: number }).map((_, i) => (
          <DividerUnit key={i} index={1} />
        ))}
      </div>
      <div className="w-full flex md:hidden">
        { Array.from({ length: number - 3 }).map((_, i) => (
          <DividerUnit key={i} index={0} />
        ))}
      </div>
    </>
  )
};
