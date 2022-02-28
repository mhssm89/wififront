import React from "react";

// import { useSnackbar } from "notistack";

function useTable({ query }) {
  const [items, setItems] = React.useState([]);
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [nextToken, setNextToken] = React.useState(undefined);
  const [tokenAfterNext, setTokenAfterNext] = React.useState();
  const [previousTokens, setPreviousTokens] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  // const { enqueueSnackbar } = useSnackbar();

  const hasNext = !!tokenAfterNext; // If has next page
  const hasPrev = previousTokens.length; // If has prev page
  const enableBulkOperations = selectedItems.length > 0;
  const isSomeItemsSelected =
    selectedItems.length > 0 && selectedItems.length < items.length;
  const isAllItemsSelected = selectedItems.length === items.length;

  // Load data
  const loadData = async function () {
    try {
      // Set loading
      setIsLoading(true);

      // Make an API request
      // const { data } = await API.graphql({
      //   query,
      //   variables: { limit, nextToken },
      // });

      // Set tokens
      // setTokenAfterNext(data[queryName].nextToken);
      // setItems(data[queryName].items);
    } catch (err) {
      // Show error message
      // enqueueSnackbar("Error processing request.", { variant: "error" });
    } finally {
      // Finish
      setIsLoading(false);
    }
  };

  // Get next table page
  const nextPage = function () {
    setPreviousTokens((prev) => [...prev, nextToken]);
    setNextToken(tokenAfterNext);
    setTokenAfterNext(null);
  };

  // Get previous table page
  const prevPage = function () {
    setNextToken(previousTokens.pop());
    setPreviousTokens([...previousTokens]);
    setTokenAfterNext(null);
  };

  // Reset table pagination
  const resetPagination = function () {
    setNextToken(undefined);
    setPreviousTokens([]);
    setTokenAfterNext(null);
  };

  // Handle select all items
  const handleSelectAllItems = function (event) {
    setSelectedItems(event.target.checked ? items.map((item) => item.id) : []);
  };

  // Handle select one item
  const handleSelectOneItem = function (event, itemId) {
    if (!selectedItems.includes(itemId)) {
      setSelectedItems((prevSelected) => [...prevSelected, itemId]);
    } else {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((id) => id !== itemId)
      );
    }
  };

  // Handle page change
  const handlePageChange = function (event, newPage) {
    setPage(newPage);

    if (newPage > page) nextPage();
    if (newPage < page) prevPage();
  };

  // Handle limit change
  const handleLimitChange = function (event) {
    const newLimit = parseInt(event.target.value);

    setPage(0);
    setLimit(newLimit);
    resetPagination();
  };

  React.useEffect(() => {
    loadData();
  }, [nextToken, limit]);

  return {
    items,
    selectedItems,
    isAllItemsSelected,
    isSomeItemsSelected,
    page,
    limit,
    hasNext,
    hasPrev,
    isLoading,
    setItems,
    setSelectedItems,
    setLimit,
    enableBulkOperations,
    handleSelectAllItems,
    handleSelectOneItem,
    handlePageChange,
    handleLimitChange,
  };
}

export default useTable;
