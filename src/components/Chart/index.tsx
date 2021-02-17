import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryLabel, VictoryAxis } from "victory-native";
import { PropsDataChart } from '../../models/Weight';
import { styles } from './styles';

interface PropsDataWeight {
    data: PropsDataChart[]
}

const Chart: React.FC<PropsDataWeight> = ({ data }) => {
    const [dataChart, setDataChart] = useState<PropsDataChart[]>();
    const [verifyData, setVerifyData] = useState(true);
    const [widthChart, setWidthChart] = useState(400);

    useEffect(() => {
        setVerifyData(true);

        if(dataChart){    
            if(dataChart.length > 5 && dataChart.length < 9){
                setWidthChart(600)
            } else if (dataChart.length > 10 && dataChart.length < 16){
                setWidthChart(1000);
            } else if (dataChart.length > 17 && dataChart.length < 23){
                setWidthChart(1200);
            } else {
                setWidthChart(1500);
            }
        }

        const timer = setTimeout(() => {
            setDataChart(data);
            setVerifyData(false);
        }, 1000);
        return () => clearTimeout(timer);        
    },[data])

    if(verifyData){
        return(
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#003265"/>
            </View>
        );
    }
    
    return(
        <ScrollView style={ styles.chart } showsHorizontalScrollIndicator={false} horizontal={true}>
            <VictoryChart width={widthChart} theme={VictoryTheme.material}>
                <VictoryAxis/>
                <VictoryBar 
                    style={{ data: { fill: '#005187', stroke: '#000', strokeWidth: 2, width: 30 } }}
                    data={dataChart}
                    labels={ ({ datum }) => datum.earnings > 0 ? datum.earnings : ''}
                    labelComponent={ <VictoryLabel style={[ { fontSize: 18, fill: '#fff' } ]} dy={30}/> }
                    alignment="middle"
                    animate={{ duration: 2000, onLoad: { duration: 1000 } }}
                    x="quarter" 
                    y="earnings"
                />
            </VictoryChart>
        </ScrollView>
    );
}

export default Chart;