import {View, Text} from 'react-native';
import React from 'react';

import {Dimensions} from 'react-native';
import Svg, {Path, Circle, Rect, Mask, G, XmlProps} from 'react-native-svg';
import {LineChart} from 'react-native-chart-kit';
type Props = {};

const ChatPage = (props: Props) => {
  const screenWidth = Dimensions.get('window').width;
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Rainy Days'], // optional
  };
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff', padding: 8}}>
      <Text
        style={{
          color: '#000',
          fontSize: 25,
          fontWeight: '500',
          fontStyle: 'italic',
        }}>
        Chat Page
      </Text>
      <View className="h-[200px]  mx-4 rounded-md ">
        {/* <Svg
          width="323"
          height="132"
          viewBox="0 0 323 132"
          xmlns="http://www.w3.org/2000/svg">
          <Mask
            id="mask0_51_56"
            style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="323"
            height="132">
            <Path
              d="M 1.96002 92.3722 L5.08955 78.4959C8.21909 64.6196 14.4782 36.867 20.7372 32.6782C26.9963 28.4893 33.2553 47.8641 39.5144 53.6286C45.7735 59.393 52.0325 51.5471 58.2916 53.3855C64.5507 55.2239 70.8097 66.7466 77.0688 63.4417C83.3279 60.1368 89.5869 42.0042 95.846 46.6806C102.105 51.357 108.364 78.8425 114.623 96.8038C120.882 114.765 127.141 123.202 133.4 127.275C139.659 131.348 145.919 131.057 152.178 116.054C158.437 101.051 164.696 71.3365 170.955 54.9029C177.214 38.4694 183.473 35.3169 189.732 36.0231C195.991 36.7293 202.25 41.2944 208.509 53.8811C214.768 66.4679 221.027 87.0765 227.286 91.1814C233.545 95.2864 239.804 82.8878 246.064 74.9911C252.323 67.0945 258.582 63.6998 264.841 68.8035C271.1 73.9072 277.359 87.5092 283.618 76.2904C289.877 65.0715 296.136 29.0318 302.395 13.1848C308.654 -2.66228 314.913 1.68328 318.043 3.85606L321.172 6.02884"
              stroke="#49B14E"
              strokeWidth="6"
            />
          </Mask>
          <G mask="url(#mask0_51_56)">
            <Rect
              x="-9"
              y="109.1799"
              width="360.452"
              height="28.5477"
              fill="#4DB04F"
            />
            <Rect
              x="-9"
              y="86.0085"
              width="360.452"
              height="23.5015"
              fill="#76D610"
            />
            <Rect
              x="-9"
              y="62.8401"
              width="360.452"
              height="23.5015"
              fill="#F7E70E"
            />
            <Rect
              x="-9"
              y="41.51"
              width="360.452"
              height="21.6631"
              fill="#FE9901"
            />
            <Rect
              x="-9"
              y="20.1799"
              width="360.452"
              height="21.6631"
              fill="#FE0000"
            />
            <Rect
              x="-9"
              y="-1.15015"
              width="360.452"
              height="21.6631"
              fill="#C00000"
            />
          </G>
        </Svg> */}
      </View>

      {/* <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      /> */}
    </View>
  );
};

export default ChatPage;
