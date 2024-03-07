import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { IconType } from '../../utils/interface'

export const BellIcon: React.FC<IconType> = ({ style }) => {
  return (
    <Svg width={18} height={20} viewBox='0 0 18 20' fill='none' {...style}>
      <Path
        d='M17.622 13.809c-.078-.09-.154-.18-.23-.265-1.03-1.188-1.653-1.905-1.653-5.268 0-1.741-.437-3.17-1.299-4.241-.635-.792-1.493-1.392-2.625-1.836a.138.138 0 01-.038-.03C11.37.87 10.257 0 9 0 7.744 0 6.63.87 6.224 2.168a.146.146 0 01-.038.029C3.546 3.233 2.262 5.22 2.262 8.275c0 3.364-.623 4.08-1.654 5.267l-.229.265a1.505 1.505 0 00-.218 1.68c.29.58.905.94 1.608.94h14.467c.7 0 1.312-.36 1.601-.937a1.505 1.505 0 00-.215-1.681zM9 20a3.89 3.89 0 001.922-.507 3.655 3.655 0 001.377-1.374.172.172 0 00-.005-.175.183.183 0 00-.068-.064.194.194 0 00-.093-.023H5.868a.195.195 0 00-.093.023.184.184 0 00-.068.063.173.173 0 00-.006.176c.321.568.797 1.043 1.378 1.374A3.89 3.89 0 009 20z'
        fill='currentColor'
      />
    </Svg>
  )
}