const topCategoriesList = [
    { 
        id: 1, 
        name: 'Εικόνα & Ήχος', 
        imageUrl: 'M48 0H0V32.235H8.43654L6.833 37.0456C6.77108 37.2298 6.74612 37.4245 6.75955 37.6184C6.77297 37.8123 6.82452 38.0016 6.91123 38.1756C6.99794 38.3495 7.11812 38.5047 7.26488 38.6321C7.41164 38.7596 7.5821 38.8568 7.7665 38.9183C7.95089 38.9797 8.14561 39.0042 8.33948 38.9903C8.53335 38.9764 8.72258 38.9244 8.89632 38.8373C9.07007 38.7501 9.22492 38.6296 9.352 38.4825C9.47908 38.3354 9.5759 38.1647 9.63692 37.9802L11.5535 32.235H36.4465L38.3631 37.9802C38.4241 38.1647 38.5209 38.3354 38.648 38.4825C38.7751 38.6296 38.9299 38.7501 39.1037 38.8373C39.2774 38.9244 39.4666 38.9764 39.6605 38.9903C39.8544 39.0042 40.0491 38.9797 40.2335 38.9183C40.4179 38.8568 40.5884 38.7596 40.7351 38.6321C40.8819 38.5047 41.0021 38.3495 41.0888 38.1756C41.1755 38.0016 41.227 37.8123 41.2405 37.6184C41.2539 37.4245 41.2289 37.2298 41.167 37.0456L39.5635 32.235H48V0ZM45.0429 29.2779H2.95707V2.95482H45.0429L45.0429 29.2779Z',
        width: '48', 
        height: '39',
        viewBox: '0 0 48 39',
    },
    { 
        id: 2, 
        name: 'Imaging', 
        imageUrl: 'M33.9106 5.43761L35.2512 9.00001H43.5008C44.6942 9.00045 45.8385 9.47482 46.6823 10.3188C47.526 11.1628 48 12.3074 48 13.5008V40.4977C47.9996 41.6909 47.5255 42.835 46.6818 43.6787C45.8381 44.5224 44.6939 44.9966 43.5008 44.9969H4.49923C3.30607 44.9966 2.16188 44.5224 1.31818 43.6787C0.47449 42.835 0.00035255 41.6909 0 40.4977L0 13.5008C3.17366e-05 12.3074 0.474018 11.1628 1.31774 10.3188C2.16145 9.47482 3.30583 9.00045 4.49923 9.00001H12.7504L13.9122 5.91527C14.2338 5.05868 14.8091 4.32062 15.5613 3.79969C16.3135 3.27877 17.2068 2.99978 18.1217 3.00001H30.4037C31.1675 2.9986 31.9133 3.23158 32.5404 3.66749C33.1675 4.1034 33.6458 4.72125 33.9106 5.43761ZM18.1217 6.00001C17.8159 6.00029 17.5174 6.09379 17.2661 6.26805C17.0147 6.44231 16.8225 6.68904 16.715 6.97536L14.8321 12H4.49923C4.10175 12.0013 3.72095 12.1599 3.44004 12.4411C3.15912 12.7223 3.00092 13.1033 3 13.5008V40.4977C3.0008 40.8955 3.15886 41.2768 3.43972 41.5586C3.72057 41.8403 4.10143 41.9995 4.49923 42.0015H43.5008C43.8986 41.9993 44.2795 41.8401 44.5606 41.5584C44.8417 41.2768 45.0001 40.8956 45.0015 40.4977V13.5008C45 13.1032 44.8414 12.7224 44.5603 12.4413C44.2792 12.1601 43.8983 12.0015 43.5008 12H33.1772L31.1063 6.48691C31.0511 6.34495 30.9547 6.22275 30.8295 6.13599C30.7043 6.04923 30.556 6.00188 30.4037 6.00001H18.1217ZM12.7504 27C12.7499 24.7748 13.4094 22.5993 14.6453 20.7489C15.8813 18.8985 17.6383 17.4561 19.694 16.6043C21.7498 15.7524 24.012 15.5293 26.1945 15.9632C28.377 16.3971 30.3819 17.4685 31.9555 19.0419C33.5291 20.6153 34.6007 22.62 35.0349 24.8025C35.4691 26.9849 35.2463 29.2472 34.3948 31.303C33.5432 33.3589 32.1011 35.116 30.2508 36.3523C28.4006 37.5885 26.2252 38.2482 24 38.2481C21.0174 38.2459 18.1575 37.0601 16.0483 34.9512C13.9391 32.8423 12.753 29.9826 12.7504 27ZM15.7504 27C15.7504 28.6316 16.2342 30.2266 17.1407 31.5832C18.0472 32.9399 19.3356 33.9973 20.843 34.6217C22.3504 35.246 24.0092 35.4094 25.6094 35.0911C27.2097 34.7728 28.6796 33.9871 29.8334 32.8334C30.9871 31.6796 31.7728 30.2097 32.0911 28.6094C32.4094 27.0092 32.246 25.3504 31.6216 23.843C30.9973 22.3356 29.9399 21.0472 28.5832 20.1407C27.2266 19.2342 25.6316 18.7504 24 18.7504C21.8129 18.7532 19.7163 19.6233 18.1698 21.1698C16.6233 22.7163 15.7532 24.8129 15.7504 27ZM19.5008 28.4977C19.1034 28.4974 18.7223 28.3396 18.441 28.0589C18.1597 27.7782 18.0011 27.3974 18 27C18.0014 25.4091 18.6339 23.8838 19.7589 22.7589C20.8838 21.6339 22.4091 21.0014 24 21C24.3978 21 24.7794 21.158 25.0607 21.4393C25.342 21.7207 25.5 22.1022 25.5 22.5C25.5 22.8978 25.342 23.2794 25.0607 23.5607C24.7794 23.842 24.3978 24 24 24C23.2053 24.0026 22.4439 24.3195 21.8821 24.8816C21.3203 25.4437 21.0037 26.2053 21.0015 27C20.9999 27.3972 20.8411 27.7777 20.56 28.0583C20.2788 28.3389 19.898 28.4969 19.5008 28.4977Z',
        width: '48', 
        height: '48',
        viewBox: '0 0 48 48', 
    },
    { 
        id: 3, 
        name: 'Computing', 
        imageUrl: 'M48 6.9988V31.0008C47.9997 32.0616 47.5782 33.0789 46.8281 33.829C46.078 34.5791 45.0607 35.0006 43.9999 35.0009H28.0021L30.0021 43.0037H36.0023C36.3549 43.0047 36.6928 43.1455 36.9418 43.3952C37.1909 43.6449 37.3307 43.9831 37.3307 44.3358C37.3307 44.6884 37.1909 45.0267 36.9418 45.2764C36.6928 45.5261 36.3549 45.6669 36.0023 45.6679H12.0003C11.8251 45.6683 11.6515 45.6342 11.4894 45.5675C11.3274 45.5008 11.1801 45.4027 11.0561 45.279C10.932 45.1553 10.8335 45.0083 10.7664 44.8464C10.6992 44.6845 10.6646 44.511 10.6646 44.3358C10.6646 44.1606 10.6992 43.987 10.7664 43.8252C10.8335 43.6633 10.932 43.5163 11.0561 43.3926C11.1801 43.2688 11.3274 43.1708 11.4894 43.1041C11.6515 43.0374 11.8251 43.0033 12.0003 43.0037H17.9992L19.9992 35.0008H3.99881C2.93814 35.0005 1.92102 34.5789 1.17113 33.8288C0.421241 33.0787 -1.59565e-05 32.0614 4.53315e-10 31.0007L4.53316e-10 6.9988C0.000251849 5.93833 0.421635 4.92136 1.1715 4.1715C1.92137 3.42163 2.93834 3.00025 3.99881 3H43.9999C45.0605 3.0002 46.0776 3.42152 46.8277 4.17136C47.5778 4.9212 47.9995 5.93819 48 6.9988ZM45.3359 6.9988C45.3338 6.64558 45.1923 6.30749 44.942 6.05821C44.6917 5.80893 44.3531 5.66869 43.9999 5.66804H3.99881C3.64607 5.66908 3.30805 5.80957 3.0585 6.05888C2.80895 6.30818 2.66812 6.64606 2.66674 6.9988V24.3339H45.3359V6.9988ZM45.3359 26.9993H2.66674V31.0008C2.66768 31.3541 2.8082 31.6928 3.05769 31.943C3.30719 32.1933 3.64545 32.3348 3.99881 32.3368H43.9999C44.3537 32.3352 44.6926 32.1939 44.9428 31.9437C45.193 31.6935 45.3343 31.3546 45.3359 31.0008L45.3359 26.9993ZM27.252 43.0037L25.916 37.665H22.0852L20.7492 43.0037H27.252Z',
        width: '48', 
        height: '48',
        viewBox: '0 0 48 48',
    },
    { 
        id: 4, 
        name: 'Τηλεφωνία & GPS', 
        imageUrl: 'M39 43.5C38.9997 44.6934 38.5255 45.8378 37.6816 46.6816C36.8378 47.5255 35.6934 47.9997 34.5 48H13.5C12.3066 47.9997 11.1622 47.5255 10.3184 46.6816C9.47451 45.8378 9.0003 44.6934 9 43.5V4.5C9.0003 3.30662 9.47451 2.1622 10.3184 1.31836C11.1622 0.474509 12.3066 0.000304858 13.5 0L34.5 0C35.6934 0.000304858 36.8378 0.474509 37.6816 1.31836C38.5255 2.1622 38.9997 3.30662 39 4.5V43.5ZM34.5 3H13.5C13.1026 3.00143 12.7219 3.15992 12.4409 3.44092C12.1599 3.72191 12.0014 4.10261 12 4.5V43.5C12.0014 43.8974 12.1599 44.2781 12.4409 44.5591C12.7219 44.8401 13.1026 44.9986 13.5 45H34.5C34.8974 44.9986 35.2781 44.8401 35.5591 44.5591C35.8401 44.2781 35.9986 43.8974 36 43.5V4.5C35.9986 4.10261 35.8401 3.72191 35.5591 3.44092C35.2781 3.15992 34.8974 3.00143 34.5 3ZM24 42C23.4067 42 22.8266 41.8241 22.3333 41.4944C21.8399 41.1648 21.4554 40.6962 21.2284 40.148C21.0013 39.5999 20.9419 38.9967 21.0576 38.4147C21.1734 37.8328 21.4591 37.2982 21.8787 36.8787C22.2982 36.4591 22.8328 36.1734 23.4147 36.0576C23.9967 35.9419 24.5999 36.0013 25.1481 36.2284C25.6962 36.4554 26.1648 36.8399 26.4944 37.3333C26.8241 37.8266 27 38.4067 27 39C27.0006 39.3941 26.9233 39.7845 26.7728 40.1487C26.6222 40.5129 26.4012 40.8439 26.1226 41.1226C25.8439 41.4012 25.5129 41.6222 25.1487 41.7728C24.7845 41.9233 24.3941 42.0006 24 42Z',
        width: '48', 
        height: '48',
        viewBox: '0 0 48 48',
    },
    { 
        id: 5, 
        name: 'Gaming', 
        imageUrl: 'M45.2714 12.1351C44.2186 9.75861 42.3077 7.86695 39.9206 6.83822C36.2175 5.22222 32.3596 6.27806 28.9565 7.21088L28.3659 7.37143C26.9485 7.79845 25.4831 8.04608 24.0041 8.10854C22.5248 8.04601 21.059 7.79838 19.6412 7.37143L19.0518 7.21088C15.6475 6.27806 11.7908 5.2222 8.08883 6.83822C5.72487 7.88231 3.82573 9.75685 2.75092 12.107C1.34467 15.2898 -0.334646 33.829 0.0579743 36.8594C0.475165 40.1196 2.83065 42.0017 6.51855 42.0345C10.2252 42.0954 11.3186 39.5008 12.3346 37.2391C13.7514 34.0797 15.3545 30.5008 23.9619 30.2453C32.655 30.5008 34.2581 34.0797 35.6737 37.2391C36.6862 39.4868 37.8253 42.0345 41.4253 42.0345H41.4909C45.18 42.0016 47.5331 40.1196 47.9527 36.8594C48.3042 34.1266 46.6261 15.3988 45.2714 12.1351ZM45.1191 36.4961C44.9738 37.6352 44.4347 39.154 41.4675 39.1797C39.8151 39.2337 39.3417 38.4297 38.28 36.0672C36.7847 32.7368 34.5276 27.7 23.962 27.3883C13.483 27.7 11.2236 32.7368 9.72714 36.0672C8.66891 38.4298 8.22125 39.229 6.54198 39.1798C3.57244 39.154 3.03572 37.6352 2.88923 36.4962C2.52244 33.6438 4.27791 15.7222 5.36307 13.2578C6.15374 11.5677 7.52593 10.2184 9.22907 9.45621C12.0088 8.24448 15.2057 9.11871 18.2971 9.96481L18.8936 10.1277C20.5536 10.6274 22.2715 10.9098 24.0041 10.9679C25.7372 10.9098 27.4554 10.6274 29.1159 10.1277L29.7112 9.96481C32.805 9.11871 35.9995 8.24448 38.7792 9.45621C40.4867 10.1932 41.8599 11.5379 42.6323 13.2297C43.7081 15.816 45.473 33.7352 45.1191 36.4962V36.4961ZM19.4033 20.0301C19.4028 20.4086 19.252 20.7713 18.9841 21.0387C18.7163 21.3061 18.3533 21.4563 17.9748 21.4563H14.9502V24.4797C14.9492 24.8578 14.7983 25.22 14.5306 25.487C14.2629 25.7539 13.9003 25.9039 13.5223 25.9039C13.1442 25.9039 12.7816 25.7539 12.5139 25.487C12.2462 25.22 12.0953 24.8578 12.0943 24.4797V21.4563H9.07321C8.88537 21.4568 8.69928 21.4202 8.5256 21.3487C8.35192 21.2771 8.19406 21.172 8.06106 21.0394C7.92806 20.9067 7.82254 20.7491 7.75055 20.5756C7.67855 20.4022 7.64149 20.2162 7.64149 20.0283C7.64149 19.8405 7.67855 19.6545 7.75055 19.481C7.82254 19.3075 7.92806 19.1499 8.06106 19.0173C8.19406 18.8846 8.35192 18.7795 8.5256 18.708C8.69928 18.6365 8.88537 18.5999 9.07321 18.6004H12.0943V15.5769C12.0953 15.1989 12.2462 14.8366 12.5139 14.5697C12.7816 14.3027 13.1442 14.1528 13.5223 14.1528C13.9003 14.1528 14.2629 14.3027 14.5306 14.5697C14.7983 14.8366 14.9492 15.1989 14.9502 15.5769V18.6004H17.9748C18.3538 18.6005 18.7173 18.7513 18.9852 19.0194C19.2531 19.2875 19.4035 19.6511 19.4033 20.0301ZM30.2033 18.0531C29.8781 18.0529 29.5601 18.1491 29.2896 18.3296C29.0191 18.5101 28.8081 18.7668 28.6835 19.0672C28.5589 19.3677 28.5262 19.6983 28.5895 20.0173C28.6528 20.3363 28.8093 20.6294 29.0392 20.8594C29.2691 21.0895 29.562 21.2462 29.881 21.3097C30.2 21.3732 30.5306 21.3407 30.8311 21.2163C31.1316 21.0919 31.3885 20.8812 31.5692 20.6108C31.7499 20.3404 31.8463 20.0225 31.8463 19.6972C31.8461 19.2614 31.673 18.8436 31.365 18.5353C31.0569 18.2271 30.6392 18.0536 30.2034 18.0531L30.2033 18.0531ZM38.9362 19.6972C38.9362 20.0225 38.8397 20.3404 38.659 20.6108C38.4783 20.8812 38.2215 21.0919 37.921 21.2163C37.6205 21.3407 37.2898 21.3732 36.9709 21.3097C36.6519 21.2462 36.3589 21.0895 36.129 20.8594C35.8991 20.6294 35.7426 20.3363 35.6793 20.0173C35.616 19.6983 35.6488 19.3677 35.7734 19.0672C35.898 18.7668 36.1089 18.5101 36.3794 18.3296C36.65 18.1491 36.968 18.0529 37.2932 18.0531C37.729 18.0534 38.1469 18.2268 38.455 18.5351C38.7631 18.8434 38.9362 19.2614 38.9362 19.6973L38.9362 19.6972ZM35.3924 16.0726C35.3927 16.3981 35.2964 16.7163 35.1157 16.987C34.9351 17.2578 34.6782 17.4688 34.3776 17.5936C34.077 17.7183 33.7461 17.751 33.4269 17.6877C33.1076 17.6243 32.8143 17.4677 32.5841 17.2377C32.3539 17.0076 32.1971 16.7144 32.1335 16.3952C32.0699 16.076 32.1024 15.7452 32.2269 15.4444C32.3514 15.1437 32.5623 14.8867 32.8329 14.7059C33.1035 14.525 33.4217 14.4285 33.7471 14.4285C34.1832 14.4288 34.6014 14.6021 34.9098 14.9103C35.2183 15.2186 35.3919 15.6366 35.3925 16.0726L35.3924 16.0726ZM35.3924 23.3207C35.3927 23.6461 35.2964 23.9644 35.1157 24.2351C34.9351 24.5058 34.6782 24.7169 34.3776 24.8416C34.0769 24.9663 33.7461 24.9991 33.4268 24.9357C33.1076 24.8723 32.8143 24.7157 32.5841 24.4857C32.3539 24.2556 32.1971 23.9625 32.1335 23.6433C32.0699 23.3241 32.1024 22.9932 32.2269 22.6925C32.3514 22.3918 32.5623 22.1347 32.8329 21.9539C33.1035 21.7731 33.4216 21.6765 33.7471 21.6765C34.1831 21.6771 34.6011 21.8504 34.9095 22.1586C35.2179 22.4668 35.3916 22.8847 35.3925 23.3207L35.3924 23.3207Z',
        width: '48', 
        height: '48',
        viewBox: '0 0 48 48', 
    },
    { 
        id: 6, 
        name: 'Κλιματισμός & Θέρμανση', 
        imageUrl: 'M39.7326 14.959C40.1274 14.96 40.5057 15.1176 40.7845 15.3971C41.0633 15.6767 41.2199 16.0554 41.2199 16.4502C41.2199 16.845 41.0633 17.2237 40.7845 17.5032C40.5057 17.7828 40.1274 17.9403 39.7326 17.9414H35.0941C34.6993 17.9403 34.321 17.7828 34.0422 17.5032C33.7634 17.2237 33.6068 16.845 33.6068 16.4502C33.6068 16.0554 33.7634 15.6767 34.0422 15.3971C34.321 15.1176 34.6993 14.96 35.0941 14.959H39.7326ZM46.5111 3C46.9062 3.00048 47.285 3.15781 47.5642 3.43742C47.8434 3.71704 48.0001 4.09606 48 4.49119V29.3622C48.0001 29.7573 47.8434 30.1363 47.5642 30.4159C47.285 30.6956 46.9062 30.8529 46.5111 30.8534H36.4072C36.2111 30.8539 36.0168 30.8157 35.8354 30.741C35.6541 30.6663 35.4892 30.5565 35.3503 30.418C35.2115 30.2795 35.1013 30.1149 35.0261 29.9337C34.9509 29.7526 34.9122 29.5583 34.9122 29.3622C34.9122 29.166 34.9509 28.9718 35.0261 28.7906C35.1013 28.6095 35.2115 28.4449 35.3503 28.3064C35.4892 28.1679 35.6541 28.0581 35.8354 27.9834C36.0168 27.9087 36.2111 27.8705 36.4072 27.871H45.0199V25.0174H2.98235V27.871H11.4979C11.8927 27.872 12.271 28.0296 12.5498 28.3091C12.8286 28.5886 12.9852 28.9673 12.9852 29.3622C12.9852 29.757 12.8286 30.1357 12.5498 30.4152C12.271 30.6948 11.8927 30.8523 11.4979 30.8533H1.49117C1.09569 30.8533 0.716409 30.6962 0.436762 30.4166C0.157115 30.1369 7.95621e-06 29.7577 0 29.3622L0 4.49119C5.30413e-06 4.09571 0.157112 3.71642 0.436759 3.43678C0.716406 3.15713 1.09569 3.00002 1.49117 3.00001H46.5111V3ZM2.98235 22.0351H45.0199V5.98236H2.98235V22.0351ZM25.6026 29.3618V29.5879C25.6016 29.9827 25.444 30.361 25.1645 30.6399C24.8849 30.9187 24.5062 31.0753 24.1114 31.0753C23.7166 31.0753 23.3379 30.9187 23.0583 30.6399C22.7788 30.361 22.6212 29.9827 22.6202 29.5879V29.3618C22.6212 28.967 22.7788 28.5887 23.0583 28.3099C23.3379 28.0311 23.7166 27.8745 24.1114 27.8745C24.5062 27.8745 24.8849 28.0311 25.1645 28.3099C25.444 28.5887 25.6016 28.967 25.6026 29.3618ZM24.1114 36.7779C23.7159 36.7779 23.3366 36.9351 23.057 37.2147C22.7773 37.4944 22.6202 37.8737 22.6202 38.2691V38.6827C22.6197 38.8788 22.6579 39.0731 22.7326 39.2545C22.8073 39.4359 22.9171 39.6007 23.0556 39.7396C23.1941 39.8785 23.3587 39.9887 23.5398 40.0639C23.721 40.139 23.9152 40.1777 24.1114 40.1777C24.3075 40.1777 24.5018 40.139 24.6829 40.0639C24.8641 39.9887 25.0287 39.8785 25.1672 39.7396C25.3057 39.6007 25.4155 39.4359 25.4902 39.2545C25.5649 39.0731 25.6031 38.8788 25.6026 38.6827V38.2691C25.6026 37.8736 25.4455 37.4944 25.1658 37.2147C24.8862 36.9351 24.5069 36.7779 24.1114 36.7779ZM24.1114 32.2306C23.7159 32.2306 23.3366 32.3878 23.057 32.6674C22.7773 32.9471 22.6202 33.3264 22.6202 33.7219V34.1353C22.6197 34.3314 22.6579 34.5257 22.7326 34.7071C22.8073 34.8885 22.9171 35.0533 23.0556 35.1922C23.1941 35.3311 23.3587 35.4413 23.5398 35.5164C23.721 35.5916 23.9152 35.6303 24.1114 35.6303C24.3075 35.6303 24.5018 35.5916 24.6829 35.5164C24.8641 35.4413 25.0287 35.3311 25.1672 35.1922C25.3057 35.0533 25.4155 34.8885 25.4902 34.7071C25.5649 34.5257 25.6031 34.3314 25.6026 34.1353V33.7219C25.6026 33.5261 25.564 33.3322 25.4891 33.1512C25.4142 32.9703 25.3043 32.8059 25.1658 32.6674C25.0274 32.529 24.863 32.4191 24.6821 32.3442C24.5011 32.2692 24.3072 32.2306 24.1114 32.2306ZM24.1114 41.4379C23.7049 41.464 23.3238 41.6448 23.0465 41.9431C22.7691 42.2415 22.6166 42.6347 22.6202 43.042C22.6197 43.2382 22.6579 43.4325 22.7326 43.6139C22.8073 43.7953 22.9171 43.9601 23.0556 44.099C23.1941 44.2379 23.3587 44.3481 23.5398 44.4232C23.721 44.4984 23.9152 44.5371 24.1114 44.5371C24.3075 44.5371 24.5018 44.4984 24.6829 44.4232C24.8641 44.3481 25.0287 44.2379 25.1672 44.099C25.3057 43.9601 25.4155 43.7953 25.4902 43.6139C25.5649 43.4325 25.6031 43.2382 25.6026 43.042V42.8161C25.6 42.6262 25.5588 42.4388 25.4815 42.2653C25.4042 42.0918 25.2924 41.9358 25.1529 41.8069C25.0134 41.6779 24.8491 41.5787 24.6701 41.5153C24.491 41.4519 24.3009 41.4255 24.1114 41.4379ZM17.4689 28.0012C17.0695 27.9522 16.6664 28.0571 16.3416 28.2946C16.0168 28.5322 15.7945 28.8844 15.7201 29.2799C15.6815 29.472 15.6812 29.6699 15.7191 29.8621C15.7571 30.0544 15.8326 30.2373 15.9413 30.4003C16.05 30.5634 16.1898 30.7034 16.3527 30.8124C16.5155 30.9213 16.6983 30.9971 16.8905 31.0354L17.1842 31.0647C17.5287 31.0644 17.8624 30.9446 18.1285 30.7259C18.3947 30.5072 18.5767 30.2029 18.6437 29.865L18.6935 29.603C18.7214 29.417 18.7116 29.2272 18.6647 29.0451C18.6178 28.8629 18.5348 28.6921 18.4205 28.5426C18.3063 28.3932 18.1632 28.2683 17.9997 28.1753C17.8363 28.0822 17.6557 28.023 17.4689 28.0012ZM14.4583 37.4523C14.2891 37.3535 14.102 37.289 13.9079 37.2626C13.7137 37.2362 13.5162 37.2483 13.3267 37.2982C13.1373 37.3482 12.9595 37.435 12.8036 37.5537C12.6477 37.6724 12.5167 37.8206 12.4181 37.99L12.1944 38.365C12.0913 38.5321 12.0223 38.7178 11.9911 38.9116C11.96 39.1055 11.9675 39.3035 12.0131 39.4944C12.0587 39.6854 12.1415 39.8654 12.2568 40.0243C12.3722 40.1831 12.5178 40.3176 12.6852 40.4201C12.8526 40.5225 13.0387 40.5909 13.2326 40.6213C13.4265 40.6517 13.6245 40.6435 13.8153 40.5972C14.0061 40.5509 14.1858 40.4674 14.3442 40.3515C14.5026 40.2355 14.6366 40.0895 14.7384 39.9216L14.9938 39.4924C15.1929 39.1508 15.2484 38.7441 15.148 38.3616C15.0476 37.9791 14.7996 37.6521 14.4583 37.4523ZM16.4042 32.671C16.033 32.5335 15.6224 32.5491 15.2627 32.7144C14.9029 32.8796 14.6236 33.181 14.486 33.5522L14.3279 33.9746C14.2578 34.1573 14.2243 34.3521 14.2295 34.5478C14.2347 34.7435 14.2784 34.9363 14.3581 35.1151C14.4379 35.2938 14.5521 35.4552 14.6942 35.5898C14.8364 35.7244 15.0036 35.8297 15.1865 35.8996L15.7196 35.9991C16.0214 35.9992 16.3161 35.9077 16.5646 35.7366C16.8132 35.5655 17.0039 35.3229 17.1115 35.041L17.2855 34.5869C17.4227 34.216 17.4069 33.8057 17.2416 33.4464C17.0764 33.0871 16.7752 32.8082 16.4042 32.6709V32.671ZM9.40006 41.9775C9.11851 42.2546 8.95836 42.632 8.95476 43.027C8.95115 43.4219 9.10439 43.8022 9.38083 44.0844C9.65728 44.3665 10.0344 44.5274 10.4293 44.5319C10.8243 44.5363 11.2049 44.3839 11.4876 44.108L11.6684 43.925C11.7985 43.7884 11.8996 43.6268 11.9657 43.4501C12.0317 43.2733 12.0613 43.085 12.0527 42.8965C12.044 42.708 11.9973 42.5232 11.9154 42.3533C11.8334 42.1833 11.7179 42.0317 11.5759 41.9075C11.2723 41.6402 10.8783 41.4987 10.4741 41.5117C10.0699 41.5247 9.68578 41.6913 9.40006 41.9775ZM31.1103 31.0354C31.3025 30.9972 31.4853 30.9214 31.6482 30.8124C31.8111 30.7035 31.9509 30.5634 32.0596 30.4004C32.1683 30.2373 32.2438 30.0544 32.2817 29.8622C32.3197 29.6699 32.3193 29.472 32.2807 29.2799C32.2063 28.8845 31.9841 28.5322 31.6593 28.2947C31.3345 28.0572 30.9314 27.9522 30.532 28.0012C30.3452 28.023 30.1647 28.0822 30.0012 28.1753C29.8378 28.2683 29.6947 28.3932 29.5804 28.5426C29.4662 28.6921 29.3832 28.8629 29.3363 29.0451C29.2894 29.2272 29.2796 29.4169 29.3075 29.603L29.3572 29.865C29.4242 30.2029 29.6063 30.5072 29.8724 30.7259C30.1385 30.9447 30.4723 31.0644 30.8168 31.0647L31.1103 31.0354ZM35.8066 38.365L35.5829 37.99C35.4844 37.8206 35.3534 37.6722 35.1976 37.5534C35.0417 37.4346 34.8639 37.3477 34.6744 37.2977C34.4849 37.2476 34.2874 37.2355 34.0932 37.2618C33.899 37.2882 33.7119 37.3526 33.5426 37.4514C33.3733 37.5501 33.2251 37.6813 33.1066 37.8373C32.988 37.9934 32.9014 38.1713 32.8517 38.3609C32.8019 38.5505 32.7901 38.748 32.8168 38.9421C32.8434 39.1363 32.9081 39.3233 33.0071 39.4925L33.2624 39.9217C33.3644 40.0892 33.4984 40.2349 33.6568 40.3506C33.8152 40.4662 33.9948 40.5495 34.1854 40.5956C34.3761 40.6417 34.5739 40.6498 34.7676 40.6193C34.9614 40.5889 35.1472 40.5206 35.3145 40.4182C35.4818 40.3158 35.6272 40.1815 35.7425 40.0229C35.8578 39.8642 35.9407 39.6844 35.9864 39.4937C36.0321 39.303 36.0398 39.1051 36.0089 38.9114C35.978 38.7178 35.9093 38.5321 35.8066 38.365V38.365ZM33.6731 33.9746L33.5148 33.5522C33.4468 33.3684 33.3434 33.1997 33.2102 33.0559C33.0771 32.9121 32.917 32.7959 32.739 32.714C32.561 32.6321 32.3686 32.586 32.1728 32.5785C31.977 32.5709 31.7816 32.602 31.5978 32.6699C31.414 32.7379 31.2454 32.8413 31.1015 32.9744C30.9577 33.1075 30.8415 33.2677 30.7596 33.4457C30.6777 33.6237 30.6316 33.8161 30.6241 34.0119C30.6165 34.2077 30.6476 34.4031 30.7155 34.5869L30.8895 35.041C30.9971 35.3229 31.1878 35.5655 31.4363 35.7366C31.6848 35.9077 31.9795 35.9992 32.2812 35.9991L32.8145 35.8996C32.9974 35.8296 33.1646 35.7243 33.3068 35.5897C33.4489 35.4551 33.5631 35.2938 33.6428 35.115C33.7225 34.9362 33.7663 34.7435 33.7714 34.5478C33.7766 34.3521 33.7432 34.1573 33.6731 33.9746ZM38.6009 41.9776C38.3152 41.6913 37.9311 41.5247 37.5269 41.5117C37.1226 41.4987 36.7286 41.6403 36.4251 41.9076C36.283 42.0317 36.1675 42.1833 36.0855 42.3533C36.0036 42.5232 35.9568 42.708 35.9482 42.8965C35.9395 43.085 35.9691 43.2733 36.0351 43.4501C36.1012 43.6269 36.2023 43.7884 36.3324 43.9251L36.5132 44.1081C36.7957 44.3849 37.1767 44.5382 37.5722 44.5342C37.9677 44.5302 38.3455 44.3692 38.6223 44.0867C38.8992 43.8042 39.0524 43.4232 39.0484 43.0277C39.0444 42.6322 38.8834 42.2544 38.6009 41.9776V41.9776Z', 
        width: '48', 
        height: '48',
        viewBox: '0 0 48 48',
    },
    { 
        id: 7, 
        name: 'Λευκές Συσκευές', 
        imageUrl: 'M37.4531 5.06357C37.8323 5.06357 38.2029 5.17599 38.5181 5.38662C38.8333 5.59725 39.079 5.89662 39.2241 6.24689C39.3692 6.59715 39.4072 6.98257 39.3332 7.3544C39.2592 7.72624 39.0767 8.06779 38.8086 8.33587C38.5405 8.60395 38.1989 8.78651 37.8271 8.86048C37.4553 8.93444 37.0699 8.89648 36.7196 8.7514C36.3693 8.60631 36.07 8.36062 35.8593 8.0454C35.6487 7.73017 35.5363 7.35956 35.5363 6.98044C35.5367 6.47217 35.7388 5.98484 36.0981 5.62544C36.4575 5.26604 36.9449 5.06396 37.4531 5.06357ZM30.7443 5.06357C30.3652 5.06357 29.9946 5.176 29.6794 5.38663C29.3642 5.59726 29.1185 5.89664 28.9734 6.2469C28.8283 6.59716 28.7904 6.98258 28.8643 7.35441C28.9383 7.72625 29.1209 8.0678 29.3889 8.33588C29.657 8.60396 29.9986 8.78652 30.3704 8.86048C30.7422 8.93444 31.1277 8.89648 31.4779 8.7514C31.8282 8.60631 32.1276 8.36062 32.3382 8.04539C32.5488 7.73017 32.6612 7.35956 32.6612 6.98044C32.6608 6.47217 32.4588 5.98484 32.0994 5.62544C31.74 5.26604 31.2526 5.06396 30.7444 5.06357H30.7443ZM9.99472 39.8234H38.1971C38.508 39.8229 38.806 39.6992 39.0258 39.4794C39.2456 39.2595 39.3693 38.9615 39.3698 38.6507V20.3598C39.3684 20.0494 39.2444 19.7521 39.0247 19.5329C38.805 19.3136 38.5075 19.1901 38.1971 19.1894H9.99472C9.68469 19.1906 9.38769 19.3143 9.16847 19.5335C8.94924 19.7528 8.82554 20.0498 8.82433 20.3598V38.6507C8.82468 38.9612 8.94802 39.2589 9.16737 39.4787C9.38672 39.6985 9.68421 39.8224 9.99472 39.8234ZM11.8655 22.2306H36.3309V36.7822H11.8655V22.2306ZM45.1665 2.6403C45.1647 1.94099 44.8863 1.2708 44.392 0.776092C43.8977 0.281389 43.2278 0.00237812 42.5285 0L5.6403 0C4.94075 0.00229374 4.27052 0.281204 3.77586 0.77586C3.2812 1.27052 3.00229 1.94075 3 2.6403V45.3597C3.00229 46.0592 3.2812 46.7295 3.77586 47.2241C4.27052 47.7188 4.94075 47.9977 5.6403 48H42.5285C43.2278 47.9976 43.8977 47.7186 44.392 47.2239C44.8863 46.7292 45.1647 46.059 45.1665 45.3597L45.1665 2.6403ZM6.04123 3.04118H42.1276V11.0035H6.04123V3.04118ZM42.1253 44.9588H6.03888V14.0447H42.1253V44.9588Z',
        width: '48', 
        height: '48',
        viewBox: '0 0 48 48', 
    },
    { 
        id: 8, 
        name: 'Οικιακός Εξοπλισμός', 
        imageUrl: 'M51.1281 44.7333H47.8095V6.5828C47.8073 4.8376 47.113 3.1645 45.879 1.93045C44.645 0.696406 42.9719 0.00216699 41.2267 0H11.5298C9.7846 0.00216699 8.1115 0.696406 6.87746 1.93045C5.64341 3.1645 4.94917 4.8376 4.94701 6.5828V44.7333H1.63333C1.20014 44.7333 0.784699 44.9054 0.478391 45.2117C0.172082 45.518 0 45.9335 0 46.3667C0 46.7999 0.172082 47.2153 0.478391 47.5216C0.784699 47.8279 1.20014 48 1.63333 48H51.1281C51.5613 48 51.9767 47.8279 52.283 47.5216C52.5893 47.2153 52.7614 46.7999 52.7614 46.3667C52.7614 45.9335 52.5893 45.518 52.283 45.2117C51.9767 44.9054 51.5613 44.7333 51.1281 44.7333ZM33.8495 41.4716C34.9051 40.4245 35.7413 39.1774 36.309 37.8032C36.8767 36.4289 37.1646 34.9552 37.1557 33.4684V28.8554C37.156 28.6411 37.114 28.4288 37.0322 28.2306C36.9504 28.0325 36.8303 27.8524 36.6788 27.7008C36.5274 27.5491 36.3475 27.4287 36.1495 27.3466C35.9515 27.2645 35.7392 27.2222 35.5249 27.2221H17.2341C16.8009 27.2221 16.3855 27.3942 16.0791 27.7005C15.7728 28.0068 15.6008 28.4223 15.6008 28.8554V33.4683C15.6008 39.4151 20.5576 44.622 26.2471 44.7185H8.21366V18.1151H24.7449V20.8942C24.7443 21.109 24.7862 21.3219 24.868 21.5205C24.9499 21.7192 25.0701 21.8998 25.2218 22.0519C25.3735 22.204 25.5538 22.3247 25.7522 22.407C25.9506 22.4894 26.1634 22.5318 26.3782 22.5318C26.5931 22.5318 26.8058 22.4894 27.0043 22.407C27.2027 22.3247 27.3829 22.204 27.5347 22.0519C27.6864 21.8998 27.8066 21.7192 27.8884 21.5205C27.9703 21.3219 28.0121 21.109 28.0116 20.8942V18.1151H44.5428V44.7185H26.5589C29.3174 44.6196 31.9305 43.4559 33.8494 41.4716H33.8495ZM26.4005 41.4692C24.3673 41.3308 22.4613 40.4297 21.064 38.9462C19.6668 37.4627 18.8813 35.5062 18.8649 33.4683V30.4887H33.8915V33.4832C33.8952 34.5411 33.6878 35.5892 33.2816 36.5661C32.8754 37.543 32.2784 38.4291 31.5257 39.1726C30.1884 40.586 28.3454 41.4118 26.4005 41.4692L26.4005 41.4692ZM11.5298 3.26664H41.2267C42.1059 3.26755 42.9488 3.61722 43.5705 4.23893C44.1922 4.86063 44.5419 5.70358 44.5428 6.5828V14.8484H8.21366V6.5828C8.21497 5.7037 8.56477 4.86099 9.18639 4.23938C9.808 3.61776 10.6507 3.26796 11.5298 3.26664Z', 
        width: '53', 
        height: '48',
        viewBox: '0 0 53 48',
    },
    { 
        id: 9, 
        name: 'Προσωπική Φροντίδα', 
        imageUrl: 'M47.3011 0.411982C47.0871 0.273572 46.8429 0.194662 46.5916 0.182714C46.3403 0.170767 46.0902 0.226177 45.8651 0.343704L37.3185 4.81967L13.9981 0.240102C11.1845 -0.352199 8.26117 0.160152 5.7847 1.67962C3.30822 3.1991 1.4515 5.61959 0.567981 8.48034C-0.315541 11.3411 -0.164172 14.4423 0.993274 17.1937C2.15072 19.9451 4.23342 22.1546 6.84492 23.4015V40.5894C6.84647 42.555 7.59267 44.4395 8.9196 45.829C10.2465 47.2185 12.0457 47.9994 13.9217 48C15.7978 48.0006 17.5974 47.221 18.9252 45.8324C20.2529 44.4437 21.0003 42.5597 21.003 40.5941L21.012 34.8326C21.0241 34.7853 21.0339 34.7374 21.0412 34.689C21.0412 34.6396 21.0165 34.5972 21.012 34.5477L21.021 30.0812C21.0232 30.0459 21.0412 30.0176 21.0412 29.98C21.0412 29.9446 21.0233 29.9164 21.021 29.8811L21.0322 23.0224L37.3185 19.8226L45.865 24.2985C46.0691 24.4069 46.2947 24.4634 46.5235 24.4633C46.7175 24.4637 46.9096 24.4239 47.0889 24.3463C47.2682 24.2687 47.4311 24.1547 47.5683 24.011C47.7054 23.8673 47.8142 23.6966 47.8883 23.5088C47.9624 23.321 48.0003 23.1197 48 22.9164V1.72816C47.9999 1.46461 47.9357 1.20542 47.8134 0.975115C47.6911 0.744805 47.5148 0.550976 47.3011 0.411951L47.3011 0.411982ZM3.0537 12.3211C3.05378 9.8824 3.97787 7.54345 5.62295 5.81814C7.26803 4.09282 9.49954 3.12226 11.8272 3.11968C12.3731 3.11973 12.9177 3.17253 13.4543 3.27742L36.0601 7.71804V16.9265L13.4543 21.3648C12.1859 21.6145 10.8806 21.5681 9.63122 21.229C8.38189 20.8899 7.21928 20.2664 6.22617 19.4028C5.23306 18.5393 4.43389 17.457 3.88554 16.2329C3.3372 15.0089 3.05318 13.6733 3.0537 12.3211ZM18.0726 28.426H15.0611C14.866 28.4255 14.6727 28.4653 14.4923 28.5431C14.3119 28.621 14.148 28.7354 14.0098 28.8797C13.8717 29.0241 13.7621 29.1956 13.6873 29.3844C13.6125 29.5732 13.574 29.7756 13.574 29.98C13.574 30.1844 13.6125 30.3868 13.6873 30.5756C13.7621 30.7644 13.8717 30.9359 14.0098 31.0802C14.148 31.2246 14.3119 31.339 14.4923 31.4168C14.6727 31.4947 14.866 31.5345 15.0611 31.5339H18.0658L18.0636 33.135H15.0611C14.6677 33.135 14.2905 33.2987 14.0123 33.5902C13.7342 33.8816 13.5779 34.2769 13.5779 34.689C13.5779 35.1011 13.7342 35.4964 14.0123 35.7878C14.2905 36.0793 14.6677 36.243 15.0611 36.243H18.059L18.0523 40.5918C18.053 41.1603 17.9467 41.7234 17.7394 42.2489C17.5322 42.7744 17.2281 43.2519 16.8446 43.6541C16.461 44.0563 16.0056 44.3754 15.5042 44.593C15.0029 44.8107 14.4655 44.9226 13.9228 44.9225C13.3802 44.9223 12.8429 44.8101 12.3416 44.5921C11.8404 44.3742 11.3851 44.0549 11.0018 43.6524C10.6184 43.25 10.3146 42.7723 10.1077 42.2467C9.90069 41.7211 9.79467 41.158 9.79565 40.5894V24.4304C10.4649 24.5537 11.1432 24.616 11.8227 24.6164C12.5525 24.6159 13.2808 24.545 13.9981 24.4045L18.0793 23.604L18.0726 28.426ZM45.0493 20.4159L39.0108 17.2515V7.39077L45.0493 4.22865V20.4159Z', 
        width: '48', 
        height: '48',
        viewBox: '0 0 48 48',
    },
    { 
        id: 10, 
        name: 'Κήπος & Εργαλεία', 
        imageUrl: 'M15.7641 1.47752C15.7638 1.2834 15.8018 1.09113 15.876 0.911729C15.9501 0.732326 16.059 0.569322 16.1962 0.432059C16.3335 0.294797 16.4965 0.185976 16.6759 0.111835C16.8553 0.0376945 17.0476 -0.000308432 17.2417 5.00045e-06H26.25C26.4443 -0.000500585 26.6368 0.0373376 26.8165 0.111352C26.9962 0.185367 27.1595 0.294103 27.2971 0.431333C27.4347 0.568563 27.5438 0.731589 27.6183 0.911074C27.6928 1.09056 27.7311 1.28297 27.7311 1.4773C27.7311 1.67163 27.6928 1.86404 27.6183 2.04353C27.5438 2.22301 27.4347 2.38604 27.2971 2.52327C27.1595 2.6605 26.9962 2.76923 26.8165 2.84325C26.6368 2.91726 26.4443 2.9551 26.25 2.9546H17.2417C17.0477 2.95472 16.8555 2.9166 16.6762 2.84242C16.4969 2.76824 16.334 2.65945 16.1968 2.52227C16.0596 2.3851 15.9507 2.22222 15.8765 2.04296C15.8023 1.86369 15.7641 1.67155 15.7641 1.47752ZM43.4931 17.2412C43.4932 17.4352 43.455 17.6274 43.3808 17.8067C43.3066 17.986 43.1977 18.1489 43.0605 18.2861C42.9233 18.4233 42.7604 18.5322 42.5811 18.6064C42.4018 18.6806 42.2097 18.7188 42.0156 18.7187H40.9707C40.6886 21.0989 39.7417 23.3514 38.2386 25.2183C36.7354 27.0852 34.7368 28.4909 32.4717 29.2744L36.6943 46.1611C36.789 46.5416 36.7289 46.9441 36.5271 47.2802C36.3254 47.6164 35.9984 47.8587 35.6182 47.9541C35.5004 47.9842 35.3793 47.9993 35.2578 47.999C34.928 47.9987 34.6078 47.8881 34.3482 47.6847C34.0886 47.4814 33.9045 47.197 33.8252 46.8769L29.584 29.916C29.1658 29.9589 28.7456 29.9801 28.3252 29.9795H23.2246V44.2666C23.2246 44.6588 23.0688 45.0349 22.7915 45.3122C22.5142 45.5895 22.138 45.7453 21.7459 45.7453C21.3537 45.7453 20.9775 45.5895 20.7002 45.3122C20.4229 45.0349 20.2671 44.6588 20.2671 44.2666V29.9795H14.9902C14.623 29.9795 14.2627 29.957 13.9048 29.9277L9.66846 46.8769C9.58847 47.197 9.4039 47.4812 9.14402 47.6845C8.88413 47.8878 8.56382 47.9985 8.23389 47.999C8.11235 47.9993 7.99127 47.9842 7.87353 47.9541C7.49338 47.8587 7.16667 47.6162 6.96524 47.28C6.7638 46.9437 6.70412 46.5413 6.79932 46.1611L11.0063 29.333C8.70248 28.5705 6.66377 27.167 5.12923 25.287C3.59468 23.4071 2.62792 21.1286 2.34228 18.7187H1.47754C1.08567 18.7187 0.709854 18.5631 0.432761 18.286C0.155669 18.0089 0 17.6331 0 17.2412C0 16.8493 0.155669 16.4735 0.432761 16.1964C0.709854 15.9193 1.08567 15.7637 1.47754 15.7637H2.34228C2.70748 12.6642 4.19652 9.80626 6.52744 7.73099C8.85836 5.65572 11.8693 4.5072 14.9902 4.50291H28.3252C31.4457 4.5076 34.4562 5.65632 36.7867 7.73157C39.1171 9.80682 40.6058 12.6645 40.9707 15.7637H42.0156C42.4074 15.7639 42.7831 15.9196 43.0602 16.1966C43.3372 16.4737 43.4929 16.8494 43.4931 17.2412ZM37.958 18.7187H5.35791C5.70714 21.0253 6.87033 23.1307 8.63707 24.6541C10.4038 26.1775 12.6574 27.0183 14.9902 27.0244H28.3252C30.658 27.018 32.9115 26.1771 34.6783 24.6537C36.445 23.1304 37.6084 21.0252 37.958 18.7187H37.958ZM37.958 15.7637C37.6084 13.4572 36.445 11.352 34.6782 9.82865C32.9115 8.30531 30.658 7.46441 28.3252 7.458H14.9902C12.6574 7.46412 10.4038 8.30493 8.63702 9.82833C6.87029 11.3517 5.7071 13.4571 5.35787 15.7637L37.958 15.7637Z', 
        width: '44', 
        height: '48',
        viewBox: '0 0 44 48',
    },
    { 
        id: 11, 
        name: 'Ενέργεια', 
        imageUrl: 'M8.76957 27.306L10.8633 18.4558L11.444 15.9942H2.06904L3.93752 2H11.806L9.38803 9.37501L8.52536 12H17.6315L8.76957 27.306ZM18.5 10H11.2878L13.9506 1.88738C14.0088 1.66513 14.0153 1.43252 13.9698 1.20734C13.9242 0.982167 13.8278 0.770396 13.6878 0.588241C13.5478 0.406085 13.368 0.258374 13.1621 0.156415C12.9562 0.0544567 12.7298 0.000953437 12.5 0H3.50068C3.13747 0.000363285 2.78669 0.132249 2.5132 0.371263C2.23972 0.610277 2.06205 0.940246 2.01305 1.30013L0.0130504 16.3001C-0.0150743 16.5121 0.00237993 16.7277 0.0642437 16.9324C0.126107 17.137 0.230955 17.3262 0.37178 17.4871C0.512604 17.648 0.68616 17.777 0.880841 17.8655C1.07552 17.9539 1.28684 17.9998 1.50068 18H8.91935L6.03784 30.1563C5.95497 30.5065 6.00087 30.8748 6.16714 31.1939C6.33342 31.513 6.60897 31.7616 6.94345 31.8944C7.27792 32.0271 7.64899 32.035 7.98883 31.9167C8.32867 31.7984 8.61459 31.5618 8.79435 31.25L19.7944 12.25C19.9266 12.0225 19.9966 11.7641 19.9972 11.5008C19.9978 11.2376 19.929 10.9789 19.7978 10.7508C19.6665 10.5226 19.4775 10.3331 19.2496 10.2013C19.0218 10.0695 18.7633 10.0001 18.5 10Z',
        width: '20', 
        height: '32',
        viewBox: '0 0 20 32',
    },
    { 
        id: 12, 
        name: 'Ασφάλιση', 
        imageUrl: 'M26.6672 26.6683H18.7565L17.9923 25.477L22.3629 22.4552C22.7708 22.1398 23.042 21.6798 23.1206 21.1702C23.1462 20.9139 23.1159 20.6552 23.0319 20.4117C22.9478 20.1683 22.812 19.946 22.6337 19.7602L14.4074 11.2122C14.117 10.9107 13.7295 10.7213 13.3132 10.6774C12.8968 10.6334 12.4784 10.7378 12.1314 10.9721C11.7845 11.2064 11.5314 11.5556 11.4166 11.9582C11.3018 12.3608 11.3328 12.7909 11.504 13.173L14.2414 19.2745L9.67347 22.4331C9.3306 22.67 9.08192 23.02 8.9709 23.4217C8.85987 23.8234 8.89357 24.2514 9.06611 24.6308L9.99245 26.6683H5.33278V10.6062L15.7633 2.19557L15.9977 2.11159L16.232 2.19558L26.6672 10.6107V26.6683ZM31.8619 12.2199L28.4443 9.46435V4.00072C28.4443 3.88292 28.3975 3.76994 28.3143 3.68658C28.2311 3.60322 28.1182 3.5563 28.0004 3.55611H27.1111C27.0528 3.55609 26.995 3.56759 26.9411 3.58993C26.8871 3.61228 26.8382 3.64504 26.7969 3.68633C26.7557 3.72763 26.723 3.77666 26.7007 3.8306C26.6785 3.88455 26.6671 3.94236 26.6672 4.00072V8.0309L17.2567 0.445753C16.9017 0.157399 16.4583 0 16.001 0C15.5436 0 15.1002 0.157399 14.7452 0.445753L0.139956 12.2199C0.101504 12.2505 0.0695119 12.2884 0.0458431 12.3314C0.0221742 12.3744 0.00730153 12.4217 0.00209049 12.4705C-0.00312055 12.5194 0.00143437 12.5687 0.0154901 12.6158C0.0295459 12.6629 0.0528214 12.7066 0.0839619 12.7446L0.870987 13.7198L1.16457 13.8597L1.40219 13.7758L3.55498 12.0396V27.5562C3.55496 27.673 3.57796 27.7886 3.62264 27.8965C3.66733 28.0044 3.73283 28.1025 3.8154 28.185C3.89798 28.2676 3.99601 28.3331 4.10391 28.3778C4.2118 28.4225 4.32744 28.4455 4.44422 28.4455H12.7533L11.9453 26.6683L10.6844 23.8952L16.469 19.8956L13.1262 12.4452L21.3513 20.9931L15.5667 24.9927L16.6434 26.6683L17.7852 28.4455H27.5552C27.791 28.4454 28.0171 28.3517 28.1838 28.1849C28.3506 28.0182 28.4443 27.792 28.4444 27.5562V12.0442L30.5991 13.7816C30.6377 13.8128 30.682 13.8362 30.7295 13.8503C30.7771 13.8643 30.827 13.8689 30.8763 13.8637C30.9257 13.8585 30.9735 13.8436 31.0171 13.8199C31.0606 13.7962 31.0991 13.7642 31.1303 13.7256L31.918 12.7505C31.9797 12.6722 32.0084 12.5729 31.9979 12.4738C31.9874 12.3747 31.9386 12.2836 31.8619 12.2199Z',
        width: '32', 
        height: '29',
        viewBox: '0 0 32 29',
    },
];

export default topCategoriesList;