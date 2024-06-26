import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

interface CarePlanCardProps {

}
interface StoryBookProps {
  mobile: boolean;
}


const data1 = [
  { name: 'Group A', value: 300 },

];
const data2 = [
  { name: 'Group E', value: 10 },

];


export class Chart extends PureComponent {
  render() {
    return (
      <PieChart width={180} height={180}>
        <Pie
          data={data1}
          cx={90}
          cy={90}
          innerRadius={40}
          outerRadius={55}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
          cornerRadius={10}
        >
          {data1.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={'#40C787'} />
          ))}
        </Pie>
        <Pie
          data={data2}
          cx={90}
          cy={90}
          startAngle={310}
          endAngle={0}
          innerRadius={60}
          outerRadius={75}
          fill="#82ca9d"
          paddingAngle={2}
          dataKey="value"
          cornerRadius={10}
        >
          {data2.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={"#BA22F7"} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}


export default function CarePlanCard(mobile: StoryBookProps) {


  return (
    <div className='w-full border-2 border-outlineGrey rounded-lg bg-white shadow-test'>
      <span className='text-titleCard font-semibold mt-10 ml-5 inline-block'>Care Plan Status</span>
      <div className='flex flex-row'>
        <div className='flex flex-col text-center m-auto  '>
          <h3 className='mb-3 text-titleCard'>Medical</h3>
          <span className="mb-3 text-purple text-headingCard">66%</span>
          <span>On Track</span>
        </div>
        <div className='flex flex-col text-center mx-auto'>
          <Chart />
        </div>
        <div className='flex flex-col text-center m-auto'>
          <h3 className='mb-3 text-titleCard'>Social</h3>
          <span className=' mb-3 text-success text-headingCard'>98%</span>
          <span>On Track</span>
        </div>
      </div>
    </div>
  );
}
