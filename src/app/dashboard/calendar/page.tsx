'use client';
import { Calendar } from '@/components/ui/calendar';
import DashboardLayout from '../layouth';
import { useState } from 'react';

export default function Page() {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([]);

	return (
		<DashboardLayout>
			<div className="flex gap-2">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					className="rounded-md border shadow"
					disabled={(date)=> date.getDay()=== 0 || date.getDay() === 6}
				/>
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					className="rounded-md border shadow"
				/>
				<Calendar
					mode="multiple"
					selected={multipleDate}
					onSelect={setMultipleDate}
					className="rounded-md border shadow"
					
				/>
				<div>
					<h1 className="text-2xl">Selected Date</h1>
					<p>
						{date?.toLocaleDateString('es-Es', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</p>
				</div>
			</div>
		</DashboardLayout>
	);
}
