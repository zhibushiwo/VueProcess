<template>
  <div id="chart"></div>
</template>
<script>
export default {
    name:"ProcessChart",
    mounted(){
        this.getChart()
    },
    methods:{
        getChart(){
          var chartOption = {
            animation: false,
            backgroundColor: "#404A59",
            title: [{
                text: '每小时产量',
                left: '1%',
                top: '1%',
                textStyle: {
                    color: '#ffd285'
                }
            }, {
                text: '条码状态',
                left: '83%',
                top: '1%',
                textAlign: 'center',
                textStyle: {
                    color: '#ffd285'
                }
            }],
            tooltip: {
                trigger: 'axis'
            },
            label: {
                normal: {
                    show: true,
                    color: "#fff"
                }
            },
            grid: {
                left: '1%',
                right: '35%',
                top: '16%',
                bottom: '6%',
                containLabel: true
            },
            toolbox: {
                "show": false,
            },
            xAxis: {
                type: 'category',
                "axisLine": {
                    lineStyle: {
                        color: '#c0576d'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#ffd285'
                    }
                },
                boundaryGap: false,
                data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00']
            },
            yAxis: {
                "axisLine": {
                    lineStyle: {
                        color: '#c0576d'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#c0576d'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#ffd285'
                    }
                },
                type: 'value'
            },
            series: [{
                name: '条码',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [12, 25, 39, 30, 26, 50, 20]
            }, {
                type: 'pie',
                center: ['83%', '50%'],
                radius: ['33%', '43%'],
                name: '饼图',
                label: {
                    color: '#ffd285',
                    formatter: "{b}: {c}"
                },
                labelLine: {
                    length2: 0
                },
                data: [
                    {
                        value: 45,
                        name: '通过条码',
                        itemStyle: {
                            normal: {
                                color: '#ADFF2F'
                            }
                        }
                    },
                    {
                        value: 9,
                        name: '返修条码',
                        itemStyle: {
                            normal: {
                                color: '#FF0000'
                            }
                        }
                    },
                    {
                        value: 3,
                        name: '其他条码',
                        itemStyle: {
                            normal: {
                                color: '#FFFF00'
                            }
                        }
                    }]
            }
            ]
            }
        let myChart = this.$echarts.init(document.getElementById('chart'))
        myChart.setOption(chartOption)
    }
    }
}
</script>
<style scoped>
#chart{
    height: 33vh;
}
</style>
