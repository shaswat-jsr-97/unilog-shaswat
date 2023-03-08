import { Field, FieldType } from 'shared/types/forms'

import MultiSelect from './MultiSelect/MultiSelect'

type Props<T extends FieldType> = {
    field: Field<T>
}

export default function FormField<T extends FieldType>({ field }: Props<T>) {
    switch (field.type) {
        case 'multi_select':
            return <MultiSelect field={field as Field<'multi_select'>} />
        default:
            return <></>
    }
}
