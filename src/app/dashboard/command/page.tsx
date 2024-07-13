'use client';
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from '@/components/ui/command';
import {
	FaceIcon,
	PersonIcon,
	EnvelopeClosedIcon,
	GearIcon,
} from '@radix-ui/react-icons';
import { CalendarIcon, RocketIcon } from 'lucide-react';
import DashboardLayout from '../layouth';
import { useEffect, useState } from 'react';

export default function Page() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'i' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, []);

	return (
		<DashboardLayout>
			<div>
				<CommandDialog
					open={open}
					onOpenChange={setOpen}
				>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Suggestions">
							<CommandItem>
								<CalendarIcon className="mr-2 h-4 w-4" />
								<span>Calendar</span>
							</CommandItem>
							<CommandItem>
								<FaceIcon className="mr-2 h-4 w-4" />
								<span>Search Emoji</span>
							</CommandItem>
							<CommandItem>
								<RocketIcon className="mr-2 h-4 w-4" />
								<span>Launch</span>
							</CommandItem>
						</CommandGroup>
						<CommandSeparator />
						<CommandGroup heading="Settings">
							<CommandItem>
								<PersonIcon className="mr-2 h-4 w-4" />
								<span>Profile</span>
								<CommandShortcut>⌘P</CommandShortcut>
							</CommandItem>
							<CommandItem>
								<EnvelopeClosedIcon className="mr-2 h-4 w-4" />
								<span>Mail</span>
								<CommandShortcut>⌘B</CommandShortcut>
							</CommandItem>
							<CommandItem>
								<GearIcon className="mr-2 h-4 w-4" />
								<span>Settings</span>
								<CommandShortcut>⌘S</CommandShortcut>
							</CommandItem>
						</CommandGroup>
					</CommandList>
				</CommandDialog>
				<div className="mt-10 h-[200px] flex justify-center items-center">
					<p className="text-sm text-muted-foreground">
						Press{' '}
						<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
							<span className="text-xs">⌘</span>I
						</kbd>{' '}
						or{' '}
						<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
							<span className="text-xs">CTRL</span>+ I
						</kbd>
					</p>
				</div>
			</div>
		</DashboardLayout>
	);
}
