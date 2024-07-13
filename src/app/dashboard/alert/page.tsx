import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import DashboardLayout from '../layouth';
import { Terminal, CircleCheck } from 'lucide-react';

export default function Page() {
	return (
		<DashboardLayout>
			<div className="grid gap-3">
				<Alert>
					<Terminal className="h-4 w-4" />
					<AlertTitle>Heads up!</AlertTitle>
					<AlertDescription>
						You can add components to your app using the cli.
					</AlertDescription>
				</Alert>
				<Alert variant={'destructive'}>
					<Terminal className="h-4 w-4" />
					<AlertTitle>Heads up!</AlertTitle>
					<AlertDescription>
						You can add components to your app using the cli.
					</AlertDescription>
				</Alert>
				<Alert variant={'success'}>
					<CircleCheck className="h-4 w-4" />
					<AlertTitle>Heads up!</AlertTitle>
					<AlertDescription>
						You can add components to your app using the cli.
					</AlertDescription>
				</Alert>
			</div>
		</DashboardLayout>
	);
}