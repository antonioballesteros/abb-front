export type QualityType = 'BAD' | 'WARNING' | 'GOOD' | 'PERFECT' | null

export interface ControlType {
  id: string
  name: string
  order: number
  nominal: number
  dev1: number
  dev2: number
  value: number
  quality: QualityType
  lasts: string
}

export interface FeatureType {
  id: string
  name: string
  quality: QualityType
  controls: ControlType[]
}

export interface LayoutType {
  id: string
  name: string
  size: number
  features: FeatureType[]
}

export interface PartType {
  id: string
  name: string
  layouts: LayoutType[]
}
