import DashboardLayout from '../layouth';
import { payments } from '@/data/payments.data';
import { DataTable } from './data-table';
import { columns } from './columns';

async function fetchData() {
	return payments;
}

export default async function Page() {
	const data = await fetchData();

	return (
		<DashboardLayout>
			<div>
				<DataTable
					columns={columns}
					data={data}
				/>
			</div>
		</DashboardLayout>
	);
}