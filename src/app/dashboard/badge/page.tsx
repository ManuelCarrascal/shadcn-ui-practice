import { Badge } from '@/components/ui/badge';

export default function Page() {
	return (
		<div className="flex gap-2">
			<Badge capitalize>default</Badge>
			<Badge variant={'destructive'}>destructive</Badge>
			<Badge variant={'outline'}>default</Badge>
			<Badge variant={'secondary'}>default</Badge>
		</div>
	);
}
