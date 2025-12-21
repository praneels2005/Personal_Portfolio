import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  User,
  Smile,
  Code,
  Mail,
  FileText,
  Github,
  Linkedin,
  Laptop,
  Home,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-full text-gray-400 hover:text-white transition-colors"
        >
          <Code size={20} />
        </button>
      </div>

      <p className="fixed bottom-4 right-4 z-50 hidden md:block text-xs text-gray-500 bg-black/50 backdrop-blur px-2 py-1 rounded border border-white/5 pointer-events-none">
        Press <kbd className="font-sans">⌘K</kbd> to start
      </p>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0 shadow-lg">
          <DialogTitle className="sr-only">Command Menu</DialogTitle>
          <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Navigation">
                <CommandItem onSelect={() => runCommand(() => { navigate("/"); window.scrollTo(0, 0); })}>
                  <Home className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => { window.location.href = "/#about"; })}>
                  <User className="mr-2 h-4 w-4" />
                  <span>About Me</span>
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => { window.location.href = "/#projects"; })}>
                  <Code className="mr-2 h-4 w-4" />
                  <span>Projects</span>
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => { window.location.href = "/#skills"; })}>
                  <Laptop className="mr-2 h-4 w-4" />
                  <span>Skills</span>
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => { window.location.href = "/#contact"; })}>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Contact</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Social">
                <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/praneels2005", "_blank"))}>
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => window.open("https://www.linkedin.com/in/praneel-pothukanuri/", "_blank"))}>
                  <Linkedin className="mr-2 h-4 w-4" />
                  <span>LinkedIn</span>
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => window.open("mailto:praneels2005@gmail.com", "_blank"))}>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Resources">
                <CommandItem onSelect={() => runCommand(() => window.open("https://cdn.builder.io/o/assets%2Fb28ead4654094ee8a40f228083810d8e%2F35ca703adacf4328b2878b811f99d5ae?alt=media&token=2ec9963a-13cc-4924-867e-a93094925e1f&apiKey=b28ead4654094ee8a40f228083810d8e", "_blank"))}>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Resume</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
