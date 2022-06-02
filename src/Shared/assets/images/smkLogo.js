import React from "react";

export const SmkLogo = ({
    showText = true,
    showSmk = true,
    width = 400,
    height = 350,
    background = "#fff",
    backgroundOpacity = ".29",
    color = "#fff",
    colorOpacity = "0.5"
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={width} height={height} viewBox="0 0 1080 1080">
            {/* <defs>
                <clipPath id="clip-SMK_Stables_2">
                    <rect width="1080" height="1080" />
                </clipPath>
            </defs> */}
            <g id="SMK_Stables_2" data-name="SMK Stables – 2" clipPath="url(#clip-SMK_Stables_2)">
                <rect width={width} height={height} fill="rgba(255,255,255,0)" />
                {
                    showText && (
                        <text id="STABLES" transform="translate(695.976 806.148)" fill="#fff" style={{ isolation: 'isolate', letterSpacing: '0.448em', fontFamily: 'NexaBold, Nexa Bold', fontSize: 33 }}><tspan x="0" y="0">STABLES</tspan></text>
                    )
                }
                <path id="Path_18" data-name="Path 18" d="M785.246,394.621l38.343,7.554L758.8,323.209c9.549-34.854,58.365-39.057,60.446-82.144l-128.62,52.744c3.382-26.283,20.437-42.384,54.934-48.955,50.518-9.625,57-12.322,82.606-35.465,6.449,23.587,7.634,45.943-5.091,63.048-11.675,15.694-28.553,26.831-43.907,40.67,20.747,27.4,42.7,54.733,62.9,83.413,43.346,61.516,85.874,123.668,128.457,185.77,3.273,4.775,6.266,11.4,6.128,16.833-1.026,40.215-51.51,81.133-88.959,71.539-25.553-6.546-23.079-30.258-26.088-50.733,11.359,18.614,24.4,31.588,46.6,29.572,18.715-1.7,32.452-8.351,37.2-24.526-7.887-14.417-14.57-26.636-21.255-38.854l4.529-2.229,26.377,15.445,4.436-5.842q-18.172-25.854-36.34-51.711c-24.3-34.615-48.478-69.321-72.994-103.765-3.262-4.582-9.394-11.872-12.174-11.108C812.469,433.93,801.063,410.215,785.246,394.621Z" transform="translate(19.972 66.795)" fill="#fff" />
                <path id="Path_20" data-name="Path 20" d="M606.382,302.045c-46.192,33.63-92.146,67.622-138.645,100.783-40.777,29.08-87.277,34.749-136.423,23.936-43.115-9.487-85.287-12.3-126.832,1.423,29.551-28.734,63.687-46.6,105.833-42.871A387.592,387.592,0,0,1,378.484,397.2c50.385,13.812,89.594-2.485,126.707-35.239,26.733-23.594,58.842-40.408,88.735-59.948,3.191-2.086,7.6-2.176,11.444-3.193Z" transform="translate(-54.185 80.437)" fill="#fff" />
                <path id="Path_21" data-name="Path 21" d="M702.821,268.092c-76.872-14.755-140.752,14.093-201.589,53.485-51.508,33.351-106.219,55.073-170.347,43-3.4-.641-6.773-1.582-15.866-3.734,25.222-6.231,46.089-8.642,64.676-16.484,58.948-24.871,116.773-52.407,175.556-77.683C602.88,246.2,652.379,246.632,702.821,268.092Z" transform="translate(-37.323 73.242)" fill="#fff" />
                <path id="Path_22" data-name="Path 22" d="M146.45,537.071c27.894-51.161,73.274-69.022,126.243-72.544,21.2-1.41,42.493-2.076,63.718-3.31,27.356-1.591,53.34-6.77,73-28.781-6.78,26.051-24.652,41.2-46.62,49.33-21.559,7.982-44.5,13.253-67.428,16.464C244.082,505.412,190.65,504.134,146.45,537.071Z" transform="translate(-63.037 100.819)" fill="#fff" />
                {
                    showSmk && (
                        <>
                            <path id="Path_1" data-name="Path 1" d="M1638.235,682.6c-6.138-15.371-16.853-23.785-29.581-30.017-24.739-12.115-49.309-24.681-73.879-37.241-10.217-5.223-19.671-11.881-27.239-21.553-13.233-16.911-14.775-42.015-3.54-61.771,6.411,16.416,18.5,24.621,32.149,31.229,23.341,11.306,46.582,22.922,69.525,35.239a111.218,111.218,0,0,1,24.99,17.98C1647.7,633.083,1650.493,659.735,1638.235,682.6Z" transform="translate(-1413.079 134.083)" fill="#fff" />
                            <path id="Path_9" data-name="Path 9" d="M1496.491,720.77V663.131l57.259,57.639Z" transform="translate(-1413.078 95.076)" fill="#fff" />
                            <path id="Path_10" data-name="Path 10" d="M1670.965,518.982V576.62l-57.259-57.638Z" transform="translate(-1438.265 132.226)" fill="#fff" />
                            <path id="Path_2" data-name="Path 2" d="M1926.278,516.2c0,16.083.131,32.169-.133,48.247a12.433,12.433,0,0,1-2.928,7.619q-47.37,50.165-95.046,100.01c-.409.429-1.076.587-3.741,1.974-4.317-5.222-8.841-11.351-14-16.822-26.147-27.749-52.565-55.215-78.558-83.123a21.072,21.072,0,0,1-4.943-12.473c-.591-15.1-.23-30.237-.23-46.087l98.484,104.749,99.054-105.27Z" transform="translate(-1448.854 136.279)" fill="#fff" />
                            <path id="Path_5" data-name="Path 5" d="M1727.651,717.934v-54.8l54.442,54.8Z" transform="translate(-1449.123 98.733)" fill="#fff" />
                            <path id="Path_6" data-name="Path 6" d="M1976.449,667.188v51.786h-52.071Z" transform="translate(-1498.993 97.705)" fill="#fff" />
                            <path id="Path_4" data-name="Path 4" d="M2179.347,680.4c-13.336,0-26.675.108-40.007-.111a10.3,10.3,0,0,1-6.318-2.429q-41.6-39.279-82.928-78.812c-.356-.339-.487-.892-1.637-3.1,4.33-3.58,9.412-7.331,13.948-11.606,23.01-21.682,45.785-43.588,68.925-65.141a17.479,17.479,0,0,1,10.344-4.1c12.519-.49,25.072-.19,38.216-.19l-86.859,81.663,87.291,82.136Z" transform="translate(-1510.745 136.237)" fill="#fff" />
                            <path id="Path_7" data-name="Path 7" d="M2027.98,566.576V515.022h51.837Z" transform="translate(-1505.485 136.279)" fill="#fff" />
                            <path id="Path_8" data-name="Path 8" d="M2027.98,667.188v51.554h51.837Z" transform="translate(-1505.485 97.103)" fill="#fff" />
                        </>
                    )
                }
                <path id="Path_29" data-name="Path 29" d="M643.748,394.133c-38.1-4.877-79.576,7.323-134.518,61.652,20.9-63.41,111.727-102.85,166.217-71.109-3.972,2.284-8.957,3.278-10.581,6.419-6.033,11.671-14.237,23.463-15.463,36.312-1.488,15.586,12.123,23.86,24.848,29.116,15.308,6.321,31.53,10.191,46.2,17.924,20.281,10.689,39.484,23.994,57.954,39.144-34.121-20.9-70.271-26.766-107.4-30.034-12.119-1.066-25.7-7.016-35.853-14.96-19.469-15.237-20.391-44.191-4.136-62.241C634.553,402.427,638.609,399.034,643.748,394.133Z" transform="translate(30.77 134.057)" fill="#fff" />
            </g>
        </svg>
    );
};