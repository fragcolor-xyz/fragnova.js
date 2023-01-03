import '@polkadot/types/types/registry';
import type { ClamorRuntimeOriginCaller, ClamorRuntimeRuntime, FinalityGrandpaEquivocationPrecommit, FinalityGrandpaEquivocationPrevote, FinalityGrandpaPrecommit, FinalityGrandpaPrevote, FrameSupportDispatchDispatchClass, FrameSupportDispatchDispatchInfo, FrameSupportDispatchPays, FrameSupportDispatchPerDispatchClassU32, FrameSupportDispatchPerDispatchClassWeight, FrameSupportDispatchPerDispatchClassWeightsPerClass, FrameSupportDispatchRawOrigin, FrameSupportTokensMiscBalanceStatus, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, PalletAccountsAccountInfo, PalletAccountsCall, PalletAccountsError, PalletAccountsEthLock, PalletAccountsEthLockUpdate, PalletAccountsEvent, PalletAccountsExternalID, PalletAssetsApproval, PalletAssetsAssetAccount, PalletAssetsAssetDetails, PalletAssetsAssetMetadata, PalletAssetsCall, PalletAssetsDestroyWitness, PalletAssetsError, PalletAssetsEvent, PalletAssetsExistenceReason, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesReasons, PalletBalancesReleases, PalletBalancesReserveData, PalletContractsCall, PalletContractsError, PalletContractsEvent, PalletContractsSchedule, PalletContractsScheduleHostFnWeights, PalletContractsScheduleInstructionWeights, PalletContractsScheduleLimits, PalletContractsStorageContractInfo, PalletContractsStorageDeletedContract, PalletContractsWasmOwnerInfo, PalletContractsWasmPrefabWasmModule, PalletDetachCall, PalletDetachDetachInternalData, PalletDetachDetachRequest, PalletDetachError, PalletDetachEvent, PalletDetachExportData, PalletDetachSupportedChains, PalletFragmentsCall, PalletFragmentsError, PalletFragmentsEvent, PalletFragmentsFragmentBuyOptions, PalletFragmentsFragmentDefinition, PalletFragmentsFragmentInstance, PalletFragmentsFragmentMetadata, PalletFragmentsPublishingData, PalletFragmentsSecondarySaleBuyOptions, PalletFragmentsSecondarySaleData, PalletFragmentsSecondarySaleType, PalletFragmentsUniqueOptions, PalletGrandpaCall, PalletGrandpaError, PalletGrandpaEvent, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletIdentityBitFlags, PalletIdentityCall, PalletIdentityError, PalletIdentityEvent, PalletIdentityIdentityField, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletIndicesCall, PalletIndicesError, PalletIndicesEvent, PalletMultisigCall, PalletMultisigError, PalletMultisigEvent, PalletMultisigMultisig, PalletMultisigTimepoint, PalletProtosAccountsInfo, PalletProtosCall, PalletProtosError, PalletProtosEvent, PalletProtosLinkSource, PalletProtosLinkedAsset, PalletProtosProto, PalletProtosProtoOwner, PalletProtosProtoPatch, PalletProtosUsageLicense, PalletProxyAnnouncement, PalletProxyCall, PalletProxyError, PalletProxyEvent, PalletProxyProxyDefinition, PalletSudoCall, PalletSudoError, PalletSudoEvent, PalletTimestampCall, PalletTransactionPaymentChargeTransactionPayment, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, ProtosCategories, ProtosCategoriesAudioCategories, ProtosCategoriesBinaryCategories, ProtosCategoriesModelCategories, ProtosCategoriesShardsFormat, ProtosCategoriesShardsScriptInfo, ProtosCategoriesTextCategories, ProtosCategoriesTextureCategories, ProtosCategoriesVectorCategories, ProtosCategoriesVideoCategories, ProtosPermissionsFragmentPerms, SpConsensusAuraSr25519AppSr25519Public, SpCoreEcdsaPublic, SpCoreEcdsaSignature, SpCoreEd25519Public, SpCoreEd25519Signature, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreVoid, SpFinalityGrandpaAppPublic, SpFinalityGrandpaAppSignature, SpFinalityGrandpaEquivocation, SpFinalityGrandpaEquivocationProof, SpRuntimeArithmeticError, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeMultiSigner, SpRuntimeTokenError, SpRuntimeTransactionalError, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight } from '@polkadot/types/lookup';
declare module '@polkadot/types/types/registry' {
    interface InterfaceTypes {
        ClamorRuntimeOriginCaller: ClamorRuntimeOriginCaller;
        ClamorRuntimeRuntime: ClamorRuntimeRuntime;
        FinalityGrandpaEquivocationPrecommit: FinalityGrandpaEquivocationPrecommit;
        FinalityGrandpaEquivocationPrevote: FinalityGrandpaEquivocationPrevote;
        FinalityGrandpaPrecommit: FinalityGrandpaPrecommit;
        FinalityGrandpaPrevote: FinalityGrandpaPrevote;
        FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
        FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
        FrameSupportDispatchPays: FrameSupportDispatchPays;
        FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
        FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
        FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
        FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
        FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
        FrameSystemAccountInfo: FrameSystemAccountInfo;
        FrameSystemCall: FrameSystemCall;
        FrameSystemError: FrameSystemError;
        FrameSystemEvent: FrameSystemEvent;
        FrameSystemEventRecord: FrameSystemEventRecord;
        FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
        FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
        FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
        FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
        FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
        FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
        FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
        FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
        FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
        FrameSystemPhase: FrameSystemPhase;
        PalletAccountsAccountInfo: PalletAccountsAccountInfo;
        PalletAccountsCall: PalletAccountsCall;
        PalletAccountsError: PalletAccountsError;
        PalletAccountsEthLock: PalletAccountsEthLock;
        PalletAccountsEthLockUpdate: PalletAccountsEthLockUpdate;
        PalletAccountsEvent: PalletAccountsEvent;
        PalletAccountsExternalID: PalletAccountsExternalID;
        PalletAssetsApproval: PalletAssetsApproval;
        PalletAssetsAssetAccount: PalletAssetsAssetAccount;
        PalletAssetsAssetDetails: PalletAssetsAssetDetails;
        PalletAssetsAssetMetadata: PalletAssetsAssetMetadata;
        PalletAssetsCall: PalletAssetsCall;
        PalletAssetsDestroyWitness: PalletAssetsDestroyWitness;
        PalletAssetsError: PalletAssetsError;
        PalletAssetsEvent: PalletAssetsEvent;
        PalletAssetsExistenceReason: PalletAssetsExistenceReason;
        PalletBalancesAccountData: PalletBalancesAccountData;
        PalletBalancesBalanceLock: PalletBalancesBalanceLock;
        PalletBalancesCall: PalletBalancesCall;
        PalletBalancesError: PalletBalancesError;
        PalletBalancesEvent: PalletBalancesEvent;
        PalletBalancesReasons: PalletBalancesReasons;
        PalletBalancesReleases: PalletBalancesReleases;
        PalletBalancesReserveData: PalletBalancesReserveData;
        PalletContractsCall: PalletContractsCall;
        PalletContractsError: PalletContractsError;
        PalletContractsEvent: PalletContractsEvent;
        PalletContractsSchedule: PalletContractsSchedule;
        PalletContractsScheduleHostFnWeights: PalletContractsScheduleHostFnWeights;
        PalletContractsScheduleInstructionWeights: PalletContractsScheduleInstructionWeights;
        PalletContractsScheduleLimits: PalletContractsScheduleLimits;
        PalletContractsStorageContractInfo: PalletContractsStorageContractInfo;
        PalletContractsStorageDeletedContract: PalletContractsStorageDeletedContract;
        PalletContractsWasmOwnerInfo: PalletContractsWasmOwnerInfo;
        PalletContractsWasmPrefabWasmModule: PalletContractsWasmPrefabWasmModule;
        PalletDetachCall: PalletDetachCall;
        PalletDetachDetachInternalData: PalletDetachDetachInternalData;
        PalletDetachDetachRequest: PalletDetachDetachRequest;
        PalletDetachError: PalletDetachError;
        PalletDetachEvent: PalletDetachEvent;
        PalletDetachExportData: PalletDetachExportData;
        PalletDetachSupportedChains: PalletDetachSupportedChains;
        PalletFragmentsCall: PalletFragmentsCall;
        PalletFragmentsError: PalletFragmentsError;
        PalletFragmentsEvent: PalletFragmentsEvent;
        PalletFragmentsFragmentBuyOptions: PalletFragmentsFragmentBuyOptions;
        PalletFragmentsFragmentDefinition: PalletFragmentsFragmentDefinition;
        PalletFragmentsFragmentInstance: PalletFragmentsFragmentInstance;
        PalletFragmentsFragmentMetadata: PalletFragmentsFragmentMetadata;
        PalletFragmentsPublishingData: PalletFragmentsPublishingData;
        PalletFragmentsSecondarySaleBuyOptions: PalletFragmentsSecondarySaleBuyOptions;
        PalletFragmentsSecondarySaleData: PalletFragmentsSecondarySaleData;
        PalletFragmentsSecondarySaleType: PalletFragmentsSecondarySaleType;
        PalletFragmentsUniqueOptions: PalletFragmentsUniqueOptions;
        PalletGrandpaCall: PalletGrandpaCall;
        PalletGrandpaError: PalletGrandpaError;
        PalletGrandpaEvent: PalletGrandpaEvent;
        PalletGrandpaStoredPendingChange: PalletGrandpaStoredPendingChange;
        PalletGrandpaStoredState: PalletGrandpaStoredState;
        PalletIdentityBitFlags: PalletIdentityBitFlags;
        PalletIdentityCall: PalletIdentityCall;
        PalletIdentityError: PalletIdentityError;
        PalletIdentityEvent: PalletIdentityEvent;
        PalletIdentityIdentityField: PalletIdentityIdentityField;
        PalletIdentityIdentityInfo: PalletIdentityIdentityInfo;
        PalletIdentityJudgement: PalletIdentityJudgement;
        PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
        PalletIdentityRegistration: PalletIdentityRegistration;
        PalletIndicesCall: PalletIndicesCall;
        PalletIndicesError: PalletIndicesError;
        PalletIndicesEvent: PalletIndicesEvent;
        PalletMultisigCall: PalletMultisigCall;
        PalletMultisigError: PalletMultisigError;
        PalletMultisigEvent: PalletMultisigEvent;
        PalletMultisigMultisig: PalletMultisigMultisig;
        PalletMultisigTimepoint: PalletMultisigTimepoint;
        PalletProtosAccountsInfo: PalletProtosAccountsInfo;
        PalletProtosCall: PalletProtosCall;
        PalletProtosError: PalletProtosError;
        PalletProtosEvent: PalletProtosEvent;
        PalletProtosLinkSource: PalletProtosLinkSource;
        PalletProtosLinkedAsset: PalletProtosLinkedAsset;
        PalletProtosProto: PalletProtosProto;
        PalletProtosProtoOwner: PalletProtosProtoOwner;
        PalletProtosProtoPatch: PalletProtosProtoPatch;
        PalletProtosUsageLicense: PalletProtosUsageLicense;
        PalletProxyAnnouncement: PalletProxyAnnouncement;
        PalletProxyCall: PalletProxyCall;
        PalletProxyError: PalletProxyError;
        PalletProxyEvent: PalletProxyEvent;
        PalletProxyProxyDefinition: PalletProxyProxyDefinition;
        PalletSudoCall: PalletSudoCall;
        PalletSudoError: PalletSudoError;
        PalletSudoEvent: PalletSudoEvent;
        PalletTimestampCall: PalletTimestampCall;
        PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
        PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
        PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
        PalletUtilityCall: PalletUtilityCall;
        PalletUtilityError: PalletUtilityError;
        PalletUtilityEvent: PalletUtilityEvent;
        ProtosCategories: ProtosCategories;
        ProtosCategoriesAudioCategories: ProtosCategoriesAudioCategories;
        ProtosCategoriesBinaryCategories: ProtosCategoriesBinaryCategories;
        ProtosCategoriesModelCategories: ProtosCategoriesModelCategories;
        ProtosCategoriesShardsFormat: ProtosCategoriesShardsFormat;
        ProtosCategoriesShardsScriptInfo: ProtosCategoriesShardsScriptInfo;
        ProtosCategoriesTextCategories: ProtosCategoriesTextCategories;
        ProtosCategoriesTextureCategories: ProtosCategoriesTextureCategories;
        ProtosCategoriesVectorCategories: ProtosCategoriesVectorCategories;
        ProtosCategoriesVideoCategories: ProtosCategoriesVideoCategories;
        ProtosPermissionsFragmentPerms: ProtosPermissionsFragmentPerms;
        SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public;
        SpCoreEcdsaPublic: SpCoreEcdsaPublic;
        SpCoreEcdsaSignature: SpCoreEcdsaSignature;
        SpCoreEd25519Public: SpCoreEd25519Public;
        SpCoreEd25519Signature: SpCoreEd25519Signature;
        SpCoreSr25519Public: SpCoreSr25519Public;
        SpCoreSr25519Signature: SpCoreSr25519Signature;
        SpCoreVoid: SpCoreVoid;
        SpFinalityGrandpaAppPublic: SpFinalityGrandpaAppPublic;
        SpFinalityGrandpaAppSignature: SpFinalityGrandpaAppSignature;
        SpFinalityGrandpaEquivocation: SpFinalityGrandpaEquivocation;
        SpFinalityGrandpaEquivocationProof: SpFinalityGrandpaEquivocationProof;
        SpRuntimeArithmeticError: SpRuntimeArithmeticError;
        SpRuntimeDigest: SpRuntimeDigest;
        SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
        SpRuntimeDispatchError: SpRuntimeDispatchError;
        SpRuntimeModuleError: SpRuntimeModuleError;
        SpRuntimeMultiSignature: SpRuntimeMultiSignature;
        SpRuntimeMultiSigner: SpRuntimeMultiSigner;
        SpRuntimeTokenError: SpRuntimeTokenError;
        SpRuntimeTransactionalError: SpRuntimeTransactionalError;
        SpVersionRuntimeVersion: SpVersionRuntimeVersion;
        SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
    }
}
