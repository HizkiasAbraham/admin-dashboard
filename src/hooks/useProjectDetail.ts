"use client";
import { useEffect, useState } from "react";
import { getProjectDetail } from "../utils/http-requests/client";

export function useProjectDetail<T>(
  initialData: T,
  id: string,
  path: string,
  objectOnResponse: string
) {
  const [data, setData] = useState<T>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [billingPeriod, setBillingPeriod] = useState<string>("");

  const fetchProjectDetail = async () => {
    try {
      setLoading(true);
      const result = await getProjectDetail(id, path, billingPeriod);
      setData(result?.data?.[objectOnResponse]);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    if (billingPeriod) {
      fetchProjectDetail();
    }
  }, [billingPeriod]);

  return { data, loading, setBillingPeriod };
}
