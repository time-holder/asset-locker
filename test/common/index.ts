import type { TestTypes as BaseTestTypes } from '@timeholder/asset-box/dist/test/common'
import type { GetContractReturnType } from '@nomicfoundation/hardhat-viem/types'
import type { ArtifactsMap } from 'hardhat/types'

export interface TestTypes extends BaseTestTypes {
  AssetLocker: GetContractReturnType<ArtifactsMap['AssetLocker']['abi']>
}
