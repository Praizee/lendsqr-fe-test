import Link from "next/link";
import BriefcaseIcon from "@/public/assets/svg/BriefcaseIcon";
import DashboardIcon from "@/public/assets/svg/DashboardIcon";
import UsersIcon from "@/public/assets/svg/UsersIcon";
import GuarantorsIcon from "@/public/assets/svg/GuarantorsIcon";
import LoansIcon from "@/public/assets/svg/LoansIcon";
import ModelsIcon from "@/public/assets/svg/ModelsIcon";
import SavingsIcon from "@/public/assets/svg/SavingsIcon";
import LoanRequestIcon from "@/public/assets/svg/LoanRequestIcon";
import WhitelistIcon from "@/public/assets/svg/WhitelistIcon";
import KarmaIcon from "@/public/assets/svg/KarmaIcon";
import PreferencesIcon from "@/public/assets/svg/PreferencesIcon";
import FeesAndPricingIcon from "@/public/assets/svg/FeesAndPricingIcon";
import AuditLogsIcon from "@/public/assets/svg/AuditLogsIcon";
import SettlementsIcon from "@/public/assets/svg/SettlementsIcon";
import ReportsIcon from "@/public/assets/svg/ReportsIcon";
import ServiceAccountIcon from "@/public/assets/svg/ServiceAccountIcon";
import ServicesIcon from "@/public/assets/svg/ServicesIcon";
import TransactionsIcon from "@/public/assets/svg/TransactionsIcon";
import FeesAndChargesIcon from "@/public/assets/svg/FeesAndChargesIcon";
import SavingsProductsIcon from "@/public/assets/svg/SavingsProductsIcon";
import styles from "@/app/styles/DashboardSider.module.scss";

export const sidebarData1 = [
  {
    label: <Link href="/dashboard">Dashboard</Link>,
    icon: <DashboardIcon className={styles.sider_icon} />,
    key: "dashboard",
  },
];

export const sidebarData2 = [
  {
    label: <Link href="/users">Users</Link>,
    icon: <UsersIcon className={styles.sider_icon} />,
    key: "users",
  },
  {
    label: <Link href="/guarantors">Guarantors</Link>,
    icon: <GuarantorsIcon className={styles.sider_icon} />,
    key: "guarantors",
  },
  {
    label: <Link href="/loans">Loans</Link>,
    icon: <LoansIcon className={styles.sider_icon} />,
    key: "loans",
  },
  {
    label: <Link href="/decision-models">Decision Models</Link>,
    icon: <ModelsIcon className={styles.sider_icon} />,
    key: "decision-models",
  },
  {
    label: <Link href="/savings">Savings</Link>,
    icon: <SavingsIcon className={styles.sider_icon} />,
    key: "savings",
  },
  {
    label: <Link href="/loan-requests">Loan Requests</Link>,
    icon: <LoanRequestIcon className={styles.sider_icon} />,
    key: "loan-requests",
  },
  {
    label: <Link href="/whitelist">Whitelist</Link>,
    icon: <WhitelistIcon className={styles.sider_icon} />,
    key: "whitelist",
  },
  {
    label: <Link href="/karma">Karma</Link>,
    icon: <KarmaIcon className={styles.sider_icon} />,
    key: "karma",
  },
];

export const sidebarData3 = [
  {
    label: <Link href="">Organization</Link>,
    icon: <BriefcaseIcon className={styles.sider_icon} />,
    key: "organization",
  },
  {
    label: <Link href="">Loan Products</Link>,
    icon: <LoanRequestIcon className={styles.sider_icon} />,
    key: "loan-products",
  },
  {
    label: <Link href="">Savings Products</Link>,
    icon: <SavingsProductsIcon className={styles.sider_icon} />,
    key: "savings-products",
  },
  {
    label: <Link href="">Fees and Charges</Link>,
    icon: <FeesAndChargesIcon className={styles.sider_icon} />,
    key: "fees-and-charges",
  },
  {
    label: <Link href="">Transactions</Link>,
    icon: <TransactionsIcon className={styles.sider_icon} />,
    key: "transactions",
  },
  {
    label: <Link href="">Services</Link>,
    icon: <ServicesIcon className={styles.sider_icon} />,
    key: "services",
  },
  {
    label: <Link href="">Service Account</Link>,
    icon: <ServiceAccountIcon className={styles.sider_icon} />,
    key: "service-account",
  },
  {
    label: <Link href="">Settlements</Link>,
    icon: <SettlementsIcon className={styles.sider_icon} />,
    key: "settlements",
  },
  {
    label: <Link href="">Reports</Link>,
    icon: <ReportsIcon className={styles.sider_icon} />,
    key: "reports",
  },
];

export const sidebarData4 = [
  {
    label: <Link href="">Preferences</Link>,
    icon: <PreferencesIcon className={styles.sider_icon} />,
    key: "preferences",
  },
  {
    label: <Link href="">Fees and Pricing</Link>,
    icon: <FeesAndPricingIcon className={styles.sider_icon} />,
    key: "fees-and-pricing",
  },
  {
    label: <Link href="">Audit Logs</Link>,
    icon: <AuditLogsIcon className={styles.sider_icon} />,
    key: "audit-logs",
  },
];

export const activeKeys = [
  "dashboard",
  "users",
  "guarantors",
  "loans",
  "decision-models",
  "savings",
  "loan-requests",
  "whitelist",
  "karma",
  "organization",
  "loan-products",
  "savings-products",
  "fees-and-charges",
  "transactions",
  "services",
  "service-account",
  "settlements",
  "reports",
  "preferences",
  "fees-and-pricing",
  "audit-logs",
];
