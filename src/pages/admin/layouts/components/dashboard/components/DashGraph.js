import React from "react";
import Chart from "react-apexcharts";

const DashGraph = () => {
  const chartOptions = {
    chart: {
      id: "basic-area",
      toolbar: {
        show: false,
      },
      type: "area",
    },
    xaxis: {
      categories: [
        "1 M",
        "2 M",
        "3 M",
        "4 M",
        "5 M",
        "6 M",
        "7 M",
        "8 M",
        "9 M",
        "10 M",
        "11 M",
        "12 M",
      ],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "80%",
        borderRadius: 4,
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        colors: ["var(--primary2)"],
      },
      background: {
        enabled: true,
        foreColor: "#fff",
        padding: 4,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "var(--primary2)",
        opacity: 0.9,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          color: "var(--primary2)",
          opacity: 0.45,
        },
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: "var(--primary2)",
        opacity: 0.35,
      },
    },
    stroke: {
      show: true,
      width: 3,
      colors: "#7367f0",
    },
    fill: {
      colors: ["var(--primary2)", "var(--secondary2)"],
      opacity: 1,
    },
    yaxis: {
      // show: false,
      // title: {
      //   text: "Values",
      // },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };
  const chartSeries = [
    {
      name: "Series 1",
      data: [
        30, 40, 70, 91, 30, 40, 45, 50, 45, 50, 49, 60
      ],
    },
  ];

  return (
    <div className="sm-px8">
      <div className="bgwhite b-shadow rounded-10 overflow-hidden">
        <div className="flex sm-block items-center">
          <div className="w-60 sm-w-full px20 sm-px15 py15 sm-py14">
            <h5 className="fsize20 sm-fsize16 my1 leading textdark">
              Monthly Revenue
            </h5>
            <p className="fsize13 sm-fsize11 font-200 mtpx4 textgray">
              1 Year Updates
            </p>
          </div>
          <div className="w-40 sm-w-full grid-cols-2">
            <div className="px20 py25 sm-py15 cursor-pointer bgprimary">
              <p className="fsize13 sm-fsize11 font-200 textwhite">
                Profit Capital
              </p>
              <h4 className="fsize30 sm-fsize20 textwhite leading my10">
                4332
              </h4>
            </div>
            <div className="px20 py25 sm-py15 cursor-pointer">
              <p className="fsize13 sm-fsize11 font-200 textgray">
                Loss Capital
              </p>
              <h4 className="fsize30 sm-fsize20 textdark leading my10">4332</h4>
            </div>
          </div>
        </div>
        <div className="py20 px10 border-ec">
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default DashGraph;
