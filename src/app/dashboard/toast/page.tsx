'use client'
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import DashboardLayout from '../layouth';

export default function Page() {
	return (
		<DashboardLayout>
			<div>
				<Button
					onClick={() => {
						toast({
                            variant: 'destructive',
							title: 'Scheduled: Catch up',
							description: 'Friday, February 10, 2023 at 5:57 PM',
						});
					}}
				>
					Show Toast
				</Button>
			</div>
		</DashboardLayout>
	);
}
