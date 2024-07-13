import { Skeleton } from '@/components/ui/skeleton';
import DashboardLayout from '../layouth';
import {
	Card, CardFooter,
	CardHeader
} from '@/components/ui/card';

export default function Loading() {
	const data = '123456789'.split('');

	return (
		<DashboardLayout>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
				{data.map((item) => (
					<Card key={item}>
						<CardHeader className="flex-row">
							<Skeleton className="rounded-full w-10 h-10 mr-2" />
							<div className="flex-col flex-grow">
								<Skeleton className="h-4 w-1/2 mb-2" />
								<Skeleton className="h-3 w-full"/>
							</div>
						</CardHeader>
						<CardFooter className="flex justify-end">
							<Skeleton className="h-8 w-20" />
						</CardFooter>
					</Card>
				))}
			</div>
		</DashboardLayout>
	);
}
