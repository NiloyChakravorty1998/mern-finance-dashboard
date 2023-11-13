import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery, useGetProductsQuery } from '@/store/api'
import { useMemo } from 'react';
import { useTheme } from "@mui/material";
import {
  ResponsiveContainer,
  CartesianGrid, XAxis, YAxis, Tooltip, 
  Line, Legend, LineChart,
} from 'recharts';
import BoxHeader from '@/components/BoxHeader';

type Props = {}

const Row2 = (props: Props) => {
  //BRING IN PALLETE
  const { palette } = useTheme();
  const { data : operationalData } = useGetKpisQuery();
  const { data : productsData } = useGetProductsQuery();
  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(({ month, operationalExpenses, nonOperationalExpenses }) => {
        return {
          name: month.substring(0, 3),
          "Operational Expenses" : operationalExpenses,
          "Non Operational Expenses" : nonOperationalExpenses
        };
      })
    );
  }, [operationalData]);
  return (
    <>
    <DashboardBox bgcolor="#fff" gridArea="d">
    <BoxHeader title={"Operational vs Non-Operational Expenses"}
          sideText={"+4%"}></BoxHeader>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          > 
            <CartesianGrid vertical={false} stroke={palette.grey[800]}/>
            <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
            <YAxis yAxisId="left" orientation='left' axisLine={false} 
             tickLine={false} style={{ fontSize: "10px" }} />
             <YAxis yAxisId="right" axisLine={false} orientation='right'
             tickLine={false} style={{ fontSize: "10px" }} />
            <Tooltip />
            <Legend height={10} wrapperStyle={{margin:'0 0 10px 0'}}/>
            <Line yAxisId='left' type='monotone' dataKey='Non Operational Expenses' stroke={palette.tertiary[500].toString()} />
            <Line yAxisId='right' type='monotone' dataKey='Operational Expenses' stroke={palette.primary.main} />
          </LineChart>
        </ResponsiveContainer>
    </DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="e"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="f"></DashboardBox>
    </>
  )
}

export default Row2