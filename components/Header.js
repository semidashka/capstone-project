import styled, { css } from 'styled-components';

function Logo() {
  return (
    <StyledLogo width={48} height={48} viewBox="0 0 512 512" fill="none">
      <path
        d="M53.421 200H63.958C55.6069 228.735 53.7999 258.977 58.6699 288.502C63.5399 318.027 74.963 346.087 92.1 370.618C92.164 370.718 92.234 370.808 92.3 370.902C107.642 392.772 127.212 411.345 149.852 425.525C172.493 439.704 197.746 449.203 224.119 453.459C224.854 462.852 229.101 471.624 236.014 478.025C242.928 484.427 251.999 487.988 261.421 488H442.579C452.5 487.989 462.012 484.043 469.027 477.027C476.043 470.012 479.989 460.5 480 450.579V349.421C479.988 340.427 476.742 331.738 470.855 324.939C464.967 318.14 456.831 313.686 447.931 312.389C456.294 283.835 458.186 253.776 453.469 224.398C448.751 195.021 437.544 167.065 420.661 142.565C403.779 118.065 381.646 97.6373 355.875 82.7682C330.103 67.8991 301.34 58.9629 271.68 56.61C270.502 47.5998 266.089 39.3249 259.264 33.3259C252.439 27.3268 243.666 24.0125 234.579 24H53.421C43.4997 24.0111 33.988 27.9572 26.9726 34.9726C19.9572 41.988 16.0111 51.4997 16 61.421V162.579C16.0111 172.5 19.9572 182.012 26.9726 189.027C33.988 196.043 43.4997 199.989 53.421 200V200ZM101.674 356.2C83.7836 328.652 73.5974 296.816 72.174 264H192.051C192.274 286.641 193.738 309.253 196.439 331.733C161.008 336.211 128.342 344.607 101.674 356.2ZM72.172 248C72.8594 231.692 75.7224 215.549 80.685 200H194.385C193.022 215.568 192.237 231.652 192.044 248H72.172ZM224 437.219C182.544 429.895 144.854 408.576 117.219 376.819C115.145 374.44 113.14 372.011 111.205 369.534C135.972 359.198 166.027 351.677 198.64 347.578C204.153 383.062 212.883 412.578 224 431.699V437.219ZM224 389.281C219.968 375.018 216.833 360.516 214.614 345.861C217.725 345.583 220.853 345.336 224 345.121V389.281ZM228.535 280.789C227.177 281.442 226.03 282.465 225.228 283.741C224.426 285.016 224 286.493 224 288V329.087C220.11 329.345 216.243 329.648 212.4 329.996C209.745 308.092 208.295 286.059 208.057 263.996H303.957C303.757 280.37 302.957 296.455 301.552 311.996H274.812L237 281.753C235.823 280.811 234.404 280.221 232.906 280.05C231.409 279.88 229.893 280.136 228.535 280.789V280.789ZM464 349.421V450.579C463.994 456.258 461.735 461.703 457.719 465.719C453.703 469.735 448.258 471.994 442.579 472H261.421C255.742 471.994 250.297 469.735 246.281 465.719C242.265 461.703 240.006 456.258 240 450.579V304.645L267 326.245C268.419 327.381 270.182 328 272 328H442.579C448.258 328.006 453.703 330.265 457.719 334.281C461.735 338.297 463.994 343.742 464 349.421V349.421ZM431.323 312H317.606C318.97 296.431 319.758 280.352 319.951 264H439.823C439.137 280.307 436.279 296.449 431.323 312V312ZM439.823 248H319.95C319.714 225.437 318.245 202.903 315.55 180.5C351.05 176.179 383.744 167.95 410.784 156.376C428.439 183.791 438.462 215.42 439.819 248H439.823ZM401.3 143.009C376.175 153.334 346.049 160.709 313.353 164.659C311.353 151.765 308.928 139.587 306.1 128.391C301.551 110.385 294.44 88.967 284.053 74.124C330.518 81.2145 372.488 105.873 401.3 143.009V143.009ZM272 84.656C282.159 100.015 291.533 128.451 297.474 166.292C289.106 167.004 280.615 167.495 272 167.764V84.656ZM264 232C266.122 232 268.157 231.157 269.657 229.657C271.157 228.157 272 226.122 272 224V183.774C281.351 183.493 290.581 182.953 299.691 182.156C302.319 204.009 303.741 225.99 303.95 248H208.05C208.25 231.627 209.06 215.542 210.46 200H221.196L259 230.247C260.419 231.382 262.183 232.001 264 232ZM32 61.421C32.0064 55.7417 34.2652 50.2969 38.2811 46.2811C42.2969 42.2652 47.7417 40.0064 53.421 40H234.579C240.258 40.0064 245.703 42.2652 249.719 46.2811C253.735 50.2969 255.994 55.7417 256 61.421V207.355L229 185.755C227.581 184.619 225.818 184 224 184H53.421C47.7417 183.994 42.2969 181.735 38.2811 177.719C34.2652 173.703 32.0064 168.258 32 162.579V61.421ZM108.751 151.311C109.711 151.738 110.746 151.971 111.796 151.998C112.846 152.025 113.892 151.844 114.872 151.467C115.853 151.09 116.75 150.523 117.511 149.8C118.273 149.076 118.884 148.209 119.311 147.249L127.869 127.993C127.913 127.993 127.956 128 128 128H160C160.044 128 160.087 127.994 160.131 127.993L168.689 147.249C169.116 148.209 169.728 149.076 170.489 149.799C171.251 150.523 172.148 151.09 173.128 151.467C174.109 151.844 175.154 152.024 176.205 151.997C177.255 151.97 178.29 151.737 179.25 151.31C180.21 150.883 181.077 150.271 181.8 149.51C182.524 148.748 183.091 147.851 183.468 146.871C183.845 145.89 184.025 144.845 183.998 143.794C183.971 142.744 183.738 141.709 183.311 140.749L151.311 68.749C150.683 67.3346 149.657 66.1328 148.36 65.2894C147.062 64.4459 145.548 63.997 144 63.997C142.452 63.997 140.938 64.4459 139.64 65.2894C138.343 66.1328 137.317 67.3346 136.689 68.749L104.689 140.749C104.262 141.709 104.028 142.744 104.001 143.795C103.974 144.845 104.155 145.891 104.532 146.872C104.909 147.852 105.476 148.749 106.2 149.511C106.924 150.273 107.791 150.884 108.751 151.311ZM144 91.7L153.023 112H134.977L144 91.7ZM336 448C339.582 447.993 343.117 447.184 346.345 445.633C347.643 446.941 349.354 447.759 351.186 447.95C353.019 448.14 354.861 447.692 356.401 446.68C357.941 445.668 359.083 444.154 359.635 442.396C360.187 440.638 360.113 438.743 359.428 437.033L358.578 434.909C358.517 434.758 358.465 434.609 358.405 434.454L372.977 416.454C373.168 416.882 373.34 417.323 373.491 417.776C374.089 419.555 374.329 421.436 374.196 423.308C374.063 425.181 373.56 427.008 372.716 428.685L368.845 436.427C368.365 437.368 368.077 438.394 367.996 439.447C367.915 440.499 368.043 441.558 368.373 442.561C368.703 443.564 369.228 444.491 369.918 445.29C370.608 446.089 371.45 446.744 372.394 447.216C373.338 447.688 374.367 447.969 375.42 448.042C376.473 448.115 377.531 447.978 378.531 447.64C379.531 447.303 380.455 446.77 381.249 446.074C382.042 445.378 382.69 444.531 383.155 443.583L387.026 435.841C389.637 430.613 390.682 424.742 390.035 418.933C389.388 413.125 387.076 407.628 383.378 403.103C384.08 401.435 384.196 399.578 383.707 397.835C383.217 396.093 382.151 394.568 380.683 393.509C379.215 392.451 377.431 391.922 375.623 392.008C373.815 392.094 372.09 392.791 370.729 393.985C367.282 392.672 363.624 391.999 359.935 392H349.444C349.344 389.336 349.309 386.669 349.371 384H368C370.122 384 372.157 383.157 373.657 381.657C375.157 380.157 376 378.122 376 376C376 373.878 375.157 371.843 373.657 370.343C372.157 368.843 370.122 368 368 368H350.746C351.064 365.853 351.417 363.708 351.846 361.569C352.262 359.488 351.835 357.328 350.658 355.562C349.481 353.797 347.651 352.571 345.57 352.155C343.489 351.739 341.329 352.166 339.563 353.343C337.798 354.52 336.572 356.35 336.156 358.431C335.52 361.611 335.005 364.803 334.583 368H320C317.878 368 315.843 368.843 314.343 370.343C312.843 371.843 312 373.878 312 376C312 378.122 312.843 380.157 314.343 381.657C315.843 383.157 317.878 384 320 384H333.362C333.301 386.958 333.346 389.914 333.462 392.865C327.332 394.423 321.894 397.978 318.008 402.968C314.122 407.959 312.008 414.102 312 420.427V424C312.007 430.363 314.538 436.463 319.038 440.962C323.537 445.462 329.637 447.993 336 448ZM359.231 408L352.679 416.093C352.056 413.409 351.506 410.712 351.057 408H359.231ZM328 420.427C328.004 418.085 328.669 415.792 329.919 413.812C331.169 411.831 332.953 410.244 335.065 409.233C336.201 416.552 337.895 423.773 340.134 430.833C338.923 431.572 337.537 431.976 336.118 432.001C334.699 432.026 333.299 431.672 332.063 430.975C330.826 430.279 329.798 429.266 329.084 428.04C328.37 426.813 327.996 425.419 328 424V420.427ZM335 221C335 219.022 335.586 217.089 336.685 215.444C337.784 213.8 339.346 212.518 341.173 211.761C343 211.004 345.011 210.806 346.951 211.192C348.891 211.578 350.673 212.53 352.071 213.929C353.47 215.327 354.422 217.109 354.808 219.049C355.194 220.989 354.996 223 354.239 224.827C353.482 226.654 352.2 228.216 350.556 229.315C348.911 230.414 346.978 231 345 231C342.348 231 339.804 229.946 337.929 228.071C336.054 226.196 335 223.652 335 221V221ZM368 221C368 219.022 368.586 217.089 369.685 215.444C370.784 213.8 372.346 212.518 374.173 211.761C376 211.004 378.011 210.806 379.951 211.192C381.891 211.578 383.673 212.53 385.071 213.929C386.47 215.327 387.422 217.109 387.808 219.049C388.194 220.989 387.996 223 387.239 224.827C386.482 226.654 385.2 228.216 383.556 229.315C381.911 230.414 379.978 231 378 231C375.348 231 372.804 229.946 370.929 228.071C369.054 226.196 368 223.652 368 221V221ZM400 221C400 219.022 400.586 217.089 401.685 215.444C402.784 213.8 404.346 212.518 406.173 211.761C408 211.004 410.011 210.806 411.951 211.192C413.891 211.578 415.673 212.53 417.071 213.929C418.47 215.327 419.422 217.109 419.808 219.049C420.194 220.989 419.996 223 419.239 224.827C418.482 226.654 417.2 228.216 415.556 229.315C413.911 230.414 411.978 231 410 231C407.348 231 404.804 229.946 402.929 228.071C401.054 226.196 400 223.652 400 221V221Z"
        fill="currentColor"
      />
    </StyledLogo>
  );
}

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <h1>VOCABY</h1>
    </StyledHeader>
  );
}
const StyledLogo = styled.svg`
  ${props => css`
    color: ${props.theme.dark};
  `}
  margin-left: 1.5rem;
`;

const StyledHeader = styled.header`
  ${props => css`
    color: ${props.theme.dark};
    background-color: ${props.theme.bright};
  `}
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.7rem;
  width: 100%;

  h1 {
    padding: 0.1rem;
    margin: 0;
    font-weight: 300;
    font-style: italic;
  }
`;
