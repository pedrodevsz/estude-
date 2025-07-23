"use client";

import Link from "next/link";
import { BookOpenText, ClipboardList, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { CardAction } from "@/components/ui/card";

export function Header() {
  return (
    <header className="w-full bg-background text-foreground">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="title-page-default">
          Estude+
        </Link>
        <div className="flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6 mr-12">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="text-sm font-medium hover:text-muted-foreground transition-colors"
                >
                  <Link href="/pagination/flashcards">
                    <span className="flex items-center gap-2">
                      <BookOpenText className="w-4 h-4" />
                      Flashcards
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="text-sm font-medium hover:text-muted-foreground transition-colors"
                >
                  <Link href="/pagination/quizzes">
                    <span className="flex items-center gap-2">
                      <ClipboardList className="w-4 h-4" />
                      Quizzes
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <CardAction className="flex items-center gap-4 p-0">
            <Link
              href="/user/login"
              className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Log in
            </Link>
            <Link href="/pagination/register">
              <Button className="flex items-center gap-2 cursor-pointer">
                <UserPlus className="w-4 h-4" />
                Cadastrar-se
              </Button>
            </Link>
          </CardAction>
        </div>
      </div>
    </header>
  );
}
