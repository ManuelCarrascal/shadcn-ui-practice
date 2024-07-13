import { Badge } from '@/components/ui/badge';
import DashboardLayout from '../layouth';

export default function Page() {
	return (
		<DashboardLayout>
			<div className="flex gap-2">
				<Badge capitalize>default</Badge>
				<Badge variant={'destructive'}>destructive</Badge>
				<Badge variant={'outline'}>default</Badge>
				<Badge variant={'secondary'}>default</Badge>
			</div>
		</DashboardLayout>
	);
}
