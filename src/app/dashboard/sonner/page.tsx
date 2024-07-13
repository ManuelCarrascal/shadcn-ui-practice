'use client';
import { Button } from '@/components/ui/button';
import DashboardLayout from '../layouth';
import { toast } from 'sonner';

export default function Page() {
	return (
		<DashboardLayout>
			<div>
				<Button
					variant="outline"
					onClick={() =>
						toast('Event has been created', {
                            duration: 5000,
							description: `Sunday, December ${new Date().getFullYear()}, 2023 at 9:00 AM`,
							action: {
								label: 'Undo',
								onClick: () => console.log('Undo'),
							},
						})
					}
				>
					Show Toast
				</Button>
			</div>
		</DashboardLayout>
	);
}
