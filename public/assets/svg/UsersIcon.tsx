import React from "react";
import { Icon } from "./type";

const UsersIcon = ({ ...props }: Icon) => {
  return (
    <svg
      {...props}
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M12 6.40001C12.4747 6.40001 12.9387 6.25925 13.3334 5.99553C13.728 5.73182 14.0356 5.35699 14.2173 4.91845C14.399 4.4799 14.4465 3.99734 14.3539 3.53179C14.2613 3.06624 14.0327 2.6386 13.697 2.30295C13.3614 1.9673 12.9338 1.73873 12.4682 1.64612C12.0026 1.55352 11.5201 1.60105 11.0815 1.7827C10.643 1.96435 10.2682 2.27196 10.0044 2.66664C9.74073 3.06132 9.59997 3.52533 9.59997 4.00001C9.59997 4.63653 9.85283 5.24698 10.3029 5.69706C10.753 6.14715 11.3635 6.40001 12 6.40001ZM13.2 7.20001H13.105C12.7575 7.32001 12.39 7.40001 12 7.40001C11.61 7.40001 11.2425 7.32001 10.895 7.20001H10.8C10.29 7.20001 9.81997 7.34751 9.40747 7.58501C10.0175 8.24251 10.4 9.11501 10.4 10.08V11.04C10.4 11.095 10.3875 11.1475 10.385 11.2H14.8C15.1183 11.2 15.4235 11.0736 15.6485 10.8485C15.8736 10.6235 16 10.3183 16 10C16.0002 9.63225 15.9279 9.26806 15.7873 8.92826C15.6466 8.58846 15.4404 8.27971 15.1803 8.01967C14.9203 7.75962 14.6115 7.55339 14.2717 7.41274C13.9319 7.2721 13.5677 7.19981 13.2 7.20001Z"
        fill="#213F7D"
      />
      <path
        d="M4.8 6.40002C5.35379 6.40002 5.89514 6.2358 6.3556 5.92813C6.81605 5.62047 7.17494 5.18317 7.38686 4.67153C7.59879 4.1599 7.65424 3.59691 7.5462 3.05377C7.43816 2.51062 7.17149 2.01171 6.7799 1.62012C6.38831 1.22853 5.8894 0.961859 5.34625 0.853821C4.80311 0.745782 4.24012 0.801232 3.72849 1.01316C3.21685 1.22508 2.77955 1.58397 2.47189 2.04442C2.16422 2.50488 2 3.04623 2 3.60002C1.9998 3.96778 2.07209 4.33197 2.21274 4.67177C2.35338 5.01157 2.55962 5.32031 2.81966 5.58036C3.0797 5.8404 3.38845 6.04664 3.72825 6.18728C4.06805 6.32793 4.43224 6.40022 4.8 6.40002ZM6.72 7.20002H6.5125C5.97911 7.46073 5.39369 7.59747 4.8 7.60002C4.185 7.60002 3.61 7.45002 3.0875 7.20002H2.88C2.11624 7.20022 1.38381 7.50371 0.843752 8.04377C0.30369 8.58383 0.000198819 9.31626 0 10.08L0 10.8C0 11.1183 0.126428 11.4235 0.351472 11.6485C0.576515 11.8736 0.88174 12 1.2 12H8.4C8.71826 12 9.02349 11.8736 9.24853 11.6485C9.47357 11.4235 9.6 11.1183 9.6 10.8V10.08C9.5998 9.31626 9.29631 8.58383 8.75625 8.04377C8.21619 7.50371 7.48376 7.20022 6.72 7.20002Z"
        fill="#213F7D"
      />
    </svg>
  );
};

export default UsersIcon;