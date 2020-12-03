import React from 'react';
import { ScrollView } from 'react-native';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryLabel, VictoryAxis } from "victory-native";
import { styles } from './styles';

export default function Chart() {

    const data = [
        { quarter: 'jan', earnings: 63 },
        { quarter: 'fev', earnings: 71 },
        { quarter: 'mar', earnings: 0 },
        { quarter: 'abr', earnings: 0 },
        { quarter: 'mai', earnings: 0 },
        { quarter: 'jun', earnings: 0 },
        { quarter: 'jul', earnings: 0 },
        { quarter: 'ago', earnings: 0 },
        { quarter: 'set', earnings: 0 },
        { quarter: 'out', earnings: 0 },
        { quarter: 'nov', earnings: 0 },
        { quarter: 'dez', earnings: 0 }
    ];

    return(
        <ScrollView style={ styles.chart } showsHorizontalScrollIndicator={false} horizontal={true}>
            <VictoryChart width={1000} theme={VictoryTheme.material}>
                <VictoryAxis/>
                <VictoryBar 
                    style={{ data: { fill: '#005187', stroke: '#000', strokeWidth: 2 } }}
                    data={data}
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