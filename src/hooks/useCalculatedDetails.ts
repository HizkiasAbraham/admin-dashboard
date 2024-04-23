"use client";
import { useEffect, useState } from "react";
import { getCalculatedDetail } from "../utils/http-requests/client";

export function useCalculatedDetails<T>(
  initialData: T,
  id: string,
  path: string,
  objectOnResponse: string,
  dashboardType: "portfolio" | "project" = "project"
) {
  const [data, setData] = useState<T>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [billingPeriod, setBillingPeriod] = useState<string>("");

  const fetchCalculatedDetail = async () => {
    try {
      setLoading(true);
      const result = await getCalculatedDetail(
        id,
        dashboardType,
        path,
        billingPeriod
      );
      setData(result?.data?.[objectOnResponse]);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    if (billingPeriod) {
      fetchCalculatedDetail();
    }
  }, [billingPeriod]);

  return { data, loading, setBillingPeriod };
}
