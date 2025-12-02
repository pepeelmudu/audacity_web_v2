export default function LogoCruz({ className = "w-12 h-12 md:w-16 md:h-16", color = "#685eff" }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 30000 30000"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: color, stroke: color, strokeWidth: '7.62' }}
    >
      <path 
        fillRule="evenodd"
        d="M16223 25403l-2330 0c-10,-2452 -996,-4798 -2741,-6521 -1745,-1723 -4103,-2680 -6555,-2659l0 -2330c2452,-10 4798,-996 6521,-2741 1723,-1745 2680,-4103 2659,-6555l2330 0c10,2452 997,4798 2741,6521 1745,1723 4103,2680 6555,2659l0 2330c-2452,10 -4798,997 -6521,2741 -1723,1745 -2680,4103 -2659,6555z"
      />
    </svg>
  )
}

