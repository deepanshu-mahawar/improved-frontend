"use client";

import { useEffect, useState } from "react";

import { CircularProgress, Drawer } from "@mui/material";

import { usePathname, useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import {
  Image,
  LogoWrapper,
  HeaderWrapper,
  Menu,
  MenuSubWrapper,
  MenuWrapper,
  ResponsiveMenuContainer,
  SignInButton,
  HeaderSubWrapper,
} from "./styled";

import theme from "@/theme/theme";

import { useTranslations } from "next-intl";
import { Translator } from "../translator/Translator";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Header");

  const [loading, setLoading] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activePath, setActivePath] = useState(pathname);

  const handleClick = () => {
    setLoading(true);
    router.push("/sign-in");
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <HeaderWrapper $scrolling={scrolling}>
      <HeaderSubWrapper>
        <LogoWrapper onClick={() => router.push("/")}>
          <Image src="/main-logo.png" alt="housingpass" className="logo" />
        </LogoWrapper>

        <MenuWrapper>
          <MenuSubWrapper>
            <Menu href="/" $active={activePath === "/"}>
              {t("menu.tenants")}
            </Menu>
            <Menu href="/landlords" $active={activePath === "/landlords"}>
              {t("menu.landlords")}
            </Menu>
            <Menu
              href="/data-security"
              $active={activePath === "/data-security"}
            >
              {t("menu.security")}
            </Menu>
          </MenuSubWrapper>

          <SignInButton onClick={handleClick}>
            {loading ? t("loading") : t("signIn")}
          </SignInButton>
          <Translator />
        </MenuWrapper>

        <ResponsiveMenuContainer onClick={() => setIsOpenMenu(!isOpenMenu)}>
          {isOpenMenu ? (
            <CloseIcon className="icon" />
          ) : (
            <MenuIcon className="icon" />
          )}
        </ResponsiveMenuContainer>

        <Drawer open={isOpenMenu} onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <ResponsiveMenuContainer
            $width="80vw"
            $padding="50px 20px"
            $gap="24px"
          >
            <Menu href="/" $active={activePath === "/"}>
              {t("menu.tenants")}
            </Menu>
            <Menu href="/landlords" $active={activePath === "/landlords"}>
              {t("menu.landlords")}
            </Menu>
            <Menu
              href="/data-security"
              $active={activePath === "/data-security"}
            >
              {t("menu.security")}
            </Menu>
            <SignInButton onClick={handleClick}>
              {loading ? (
                <CircularProgress
                  style={{ color: `${theme.color.primary.mainPrimary}` }}
                  size={20}
                  className="loading"
                />
              ) : (
                t("signIn")
              )}
            </SignInButton>
            <Translator />
          </ResponsiveMenuContainer>
        </Drawer>
      </HeaderSubWrapper>
    </HeaderWrapper>
  );
};

export default Header;
