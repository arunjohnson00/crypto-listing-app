import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cryptoCurrenciesListRequest } from "../../../store/action";
import UserAdminHtmlTable from "../htmltable/UserAdminHtmlTable";
import { tableHeader } from "./helper";
const UserAdminCoinListing = () => {
  const dispatch: any = useDispatch();

  const [tableData, setTableData] = useState<any>();
  useEffect(() => {
    const successHandler = (res: any) => {
      setTableData(res?.data?.data);
    };
    const errorHandler = (err: any) => {};

    dispatch(
      cryptoCurrenciesListRequest("noData", successHandler, errorHandler)
    );
  }, [dispatch]);

  return (
    <UserAdminHtmlTable
      tableData={tableData && tableData}
      tableHeader={tableHeader}
      variant="crypto_currencies"
    />
  );
};

export default UserAdminCoinListing;
