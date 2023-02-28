import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useVirtual } from '@tanstack/react-virtual'
import { useMemo, useRef } from 'react'

import styles from './TanstackTable.module.scss'

type Props<K> = {
    data: K[]
    columns: ColumnDef<K>[]
}

export default function TanstackTable<K>({ data, columns }: Props<K>) {
    const memoizedProps = useMemo(() => ({ data, columns }), [data, columns])

    const table = useReactTable({
        data: memoizedProps.data,
        columns: memoizedProps.columns,
        getCoreRowModel: getCoreRowModel(),
    })

    const tableContainerRef = useRef<HTMLDivElement>(null)
    const { rows } = table.getRowModel()
    const rowVirtualizer = useVirtual({
        parentRef: tableContainerRef,
        size: rows.length,
        overscan: 10,
    })
    const { virtualItems: virtualRows, totalSize } = rowVirtualizer
    const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0
    const paddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0) : 0

    return (
        <div className={styles.container} ref={tableContainerRef}>
            <table className={styles.table}>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {paddingTop > 0 && (
                        <tr>
                            <td style={{ height: `${paddingTop}px` }} />
                        </tr>
                    )}
                    {virtualRows.map((virtualRow) => {
                        const row = rows[virtualRow.index]
                        return (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <td key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    {paddingBottom > 0 && (
                        <tr>
                            <td style={{ height: `${paddingBottom}px` }} />
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    {table.getFooterGroups().map((footerGroup) => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.footer, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </div>
    )
}
