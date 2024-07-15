import { Button } from '@/components/ui/button';

export default function Page() {
	return (
		<div className="grid grid-cols-5 gap-2">
			<Button>default</Button>
			<Button variant={'destructive'}>destructive</Button>
			<Button variant={'ghost'}>default</Button>
			<Button variant={'link'}>default</Button>
			<Button variant={'outline'}>default</Button>
			<Button variant={'secondary'}>default</Button>
			<Button disabled>default</Button>
		</div>
	);
}
