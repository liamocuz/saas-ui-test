import { Button, Center } from '@chakra-ui/react'
import { Page, PageHeader, PageBody, DataGrid, DataGridPaginationPageControl, DataGridPaginationNextButton, DataGridPaginationPreviousButton } from '@saas-ui-pro/react'
import { Select, SelectButton, SelectList } from '@saas-ui/react';
import { data as outsideData } from './data/data';
import { useMemo, useState } from 'react';

type PaginationInfo = {
  pageIndex: number;
  pageSize: number;
}

type DataType = {
  firstName: string;
  email: string;
  phone: string;
  username: string;
  status: string;
}

const initialPaginationState: PaginationInfo = {
  pageIndex: 0,
  pageSize: 10,
}

export default function App() {
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>(initialPaginationState);

  const columns = useMemo(() => {
    return [
      {
        accessorKey: 'firstName',
        header: 'Name',
        size: 200,
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'phone',
        header: 'Phone',
      },
      {
        accessorKey: 'username',
        header: 'Username',
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      {
        id: 'action',
        disableSortBy: true,
        disableGlobaFilter: true,
        header: '',
        cell: () => (
          <>
            <Button size="xs">Edit</Button>
          </>
        ),
        size: 100,
      },
    ]
  }, [])

  console.log("RENDERING APP");

  return (
    <Page height={"100dvh"}>
      <PageHeader />
      <PageBody contentWidth={"full"} p="0" position="relative" minHeight={"0"}>
        <Center height={"100%"}>
          <DataGrid
            columns={columns}
            data={getSlice(outsideData, paginationInfo.pageIndex, paginationInfo.pageSize)}
            isSortable
            isSelectable
            isHoverable
            manualPagination
            rowCount={outsideData.length}
            state={{
              pagination: paginationInfo,
            }}
          >
            <DataGridPaginationPreviousButton
              onClick={() => {
                setPaginationInfo((prev: PaginationInfo) => ({ ...prev, pageIndex: prev.pageIndex - 1 }))
              }}
            />
            <DataGridPaginationNextButton
              onClick={() => {
                setPaginationInfo((prev: PaginationInfo) => ({ ...prev, pageIndex: prev.pageIndex + 1 }))
              }}
            />
            <DataGridPaginationPageControl
              isReadOnly
            />
            <Select
              name="Pagination"
              defaultValue={"10"}
              options={[
                { label: "10", value: "10" },
                { label: "25", value: "25" },
                { label: "50", value: "50" },
                { label: "100", value: "100" },
              ]}
              onChange={(pageSize) => {
                setPaginationInfo((prev) => ({ ...prev, pageSize: Number(pageSize) }))
              }}
            >
              <SelectButton />
              <SelectList />
            </Select>
          </DataGrid>
        </Center>
      </PageBody>
    </Page>
  )
}

function getSlice(data: DataType[], pageIndex: number, pageSize: number) {
  return data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
}